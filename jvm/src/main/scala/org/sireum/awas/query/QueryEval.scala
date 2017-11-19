/*
 Copyright (c) 2017, Robby, Kansas State University
 All rights reserved.

 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions are met:

 1. Redistributions of source code must retain the above copyright notice, this
    list of conditions and the following disclaimer.
 2. Redistributions in binary form must reproduce the above copyright notice,
    this list of conditions and the following disclaimer in the documentation
    and/or other materials provided with the distribution.

 THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR
 ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

package org.sireum.awas.query

import org.sireum.awas.collector.CollectorErrorHelper.{ReachAnalysisStage, _}
import org.sireum.awas.collector.{Collector, Operator, ResultType}
import org.sireum.awas.fptc.{FlowGraph, FlowNode}
import org.sireum.awas.query.ConstraintKind.ConstraintKind
import org.sireum.awas.reachability.ErrorReachability
import org.sireum.awas.symbol.{SymbolTable, SymbolTableHelper}
import org.sireum.awas.util.AwasUtil.ResourceUri
import org.sireum.util.{ISet, _}

object QueryEval {
  type Result = Map[String, Collector]

  def apply(m: Model, graph: FlowGraph[FlowNode], st: SymbolTable): Result = {
    new QueryEval(graph, st).eval(m)
  }
}

object ConstraintKind extends Enumeration {
  type ConstraintKind = Value
  val All, Some, None, Regex = Value
}

//Data structure to store the eval of a WithExpr, can be simple or regex,
//in case of regex, we need automaton, and for simple we need collector and type
case class ConstraintExpr(kind : ConstraintKind,
                          simple: Option[Collector],
                          regex: Option[Any])

final class QueryEval(graph: FlowGraph[FlowNode], st: SymbolTable) {
  val H = SymbolTableHelper

  var result: ILinkedMap[String, Collector] = ilinkedMapEmpty[String, Collector]

  var queries: ILinkedMap[String, QueryExpr] = ilinkedMapEmpty[String, QueryExpr]

  def eval(m: Model): QueryEval.Result = {
    m.queryStmt.foreach {
      q =>
        if (!queries.keySet.contains(q.qName.value)) {
          queries += (q.qName.value -> q.qExpr)
        }
    }
    queries.foreach {
      q => result = result + (q._1 -> eval(q._2))
    }
    result
  }

  def eval(qexp: QueryExpr): Collector = {
    qexp match {
      case binary: BinaryExpr => eval(binary)
      case primary: PrimaryExpr => eval(primary)
      case filter: FilterExpr => eval(filter)
      case reach: ReachExpr => eval(reach)
    }
  }



  def eval(fexp: FilterExpr): Collector = {
    val lhs: Collector = eval(fexp.lhs)
    fexp.op match {
      case FilterID.NODE => {
        Collector(st, graph, Some(ResultType.Node), lhs.getEdges, lhs.getOperator,
          lhs.getCriteria, lhs.getNodes.map(_.getUri), isetEmpty[ResourceUri],
          imapEmpty[ResourceUri, ISet[ResourceUri]], isetEmpty[ResourceUri], isetEmpty[ResourceUri],
          isetEmpty[ResourceUri], isetEmpty[ResourceUri], ivectorEmpty[Collector], lhs.getErrors ++ lhs.getWarnings)
      }
      case FilterID.PORT => {
        Collector(st, graph, Some(ResultType.Port), lhs.getEdges, lhs.getOperator,
          lhs.getCriteria, isetEmpty[ResourceUri], lhs.getPorts,
          imapEmpty[ResourceUri, ISet[ResourceUri]], isetEmpty[ResourceUri], isetEmpty[ResourceUri],
          isetEmpty[ResourceUri], isetEmpty[ResourceUri], ivectorEmpty[Collector], lhs.getErrors ++ lhs.getWarnings)
      }
      case FilterID.IN => {
        Collector(st, graph, Some(ResultType.Port), lhs.getEdges, lhs.getOperator,
          lhs.getCriteria, isetEmpty[ResourceUri], lhs.getPorts.filter(H.isInPort),
          imapEmpty[ResourceUri, ISet[ResourceUri]], isetEmpty[ResourceUri], isetEmpty[ResourceUri],
          isetEmpty[ResourceUri], isetEmpty[ResourceUri], ivectorEmpty[Collector], lhs.getErrors ++ lhs.getWarnings)
      }
      case FilterID.OUT => {
        Collector(st, graph, Some(ResultType.Port), lhs.getEdges, lhs.getOperator,
          lhs.getCriteria, isetEmpty[ResourceUri], lhs.getPorts.filter(H.isOutPort),
          imapEmpty[ResourceUri, ISet[ResourceUri]], isetEmpty[ResourceUri], isetEmpty[ResourceUri],
          isetEmpty[ResourceUri], isetEmpty[ResourceUri], ivectorEmpty[Collector], lhs.getErrors ++ lhs.getWarnings)
      }
      case FilterID.PORTERROR => {
        Collector(st, graph, Some(ResultType.Error), lhs.getEdges, lhs.getOperator,
          lhs.getCriteria, isetEmpty[ResourceUri], isetEmpty[ResourceUri],
          lhs.getPortErrors, isetEmpty[ResourceUri], isetEmpty[ResourceUri],
          isetEmpty[ResourceUri], isetEmpty[ResourceUri], ivectorEmpty[Collector], lhs.getErrors ++ lhs.getWarnings)
      }
      case _ => lhs
    }
  }

  def eval(rexp: ReachExpr): Collector = {
    rexp match {
      case fexp: ForwardExpr => forwardReach(eval(fexp.expr))
      case bexp: BackwardExpr => backwardReach(eval(bexp.expr))
      case cexp: ChopExpr =>
        val sourceRes = forwardReach(eval(cexp.source))
        val targetRes = backwardReach(eval(cexp.target))
        sourceRes intersect targetRes
      case pexp: PathExpr => {
        val source = eval(pexp.source)
        val target = eval(pexp.target)
        val constrain = pexp.withExpr
        if(constrain.isDefined) {
          val cExp = eval(constrain.get)
          pathReach(source, target, Some(cExp))
        } else {
          pathReach(source, target, None)
        }
      }
    }
  }

  def eval(wexp: WithExpr):ConstraintExpr = {
    wexp match {
      case se : SimpleWith =>
        ConstraintExpr(
          se.op match {
            case "all" => ConstraintKind.All
            case "some" => ConstraintKind.Some
            case "none" => ConstraintKind.None
          }, Some(eval(se.expr)), None)
      case re : RegExExpr =>
        ConstraintExpr(ConstraintKind.Regex, None, None)
    }
  }


  def eval(bexp: BinaryExpr): Collector = {
    val lhs: Collector = eval(bexp.lhs)
    val rhs: Collector = eval(bexp.rhs)
    bexp.op match {
      case "union" => lhs union rhs
      case "intersect" => lhs intersect rhs
      case "-" => lhs diff rhs
    }
  }

  def backwardReach(criterion: Collector): Collector = {
    reach(criterion, isForward = false)
  }

  def pathReach(source: Collector, target: Collector, constraint: Option[ConstraintExpr]): Collector = {
    val er = ErrorReachability(graph, st)
    val resType = if (source.getResultType.isDefined && target.getResultType.isDefined) {
      if (source.getResultType.get < target.getResultType.get) source.getResultType else target.getResultType
    } else if (source.getResultType.isDefined) {
      source.getResultType
    } else {
      target.getResultType
    }

    resType match {
      case Some(ResultType.Node) => {if(constraint.isDefined) {
        er.reachPathSet(source.getNodes.map(_.getUri),
          target.getNodes.map(_.getUri), constraint.get)
      } else {
        er.reachPathSet(source.getNodes.map(_.getUri),
        target.getNodes.map(_.getUri))
      }}
      case Some(ResultType.Port) => {if(constraint.isDefined) {
        er.reachPathSet(source.getPorts, target.getPorts, constraint.get)
      } else {
        er.reachPathSet(source.getPorts, target.getPorts)
      }}
      case Some(ResultType.Error) => er.errorPathReachMap(source.getPortErrors, target.getPortErrors)
      case _ => Collector(st, graph, source.getErrors ++ target.getErrors +
        errorMessageGen(TYPE_UNKNOWN, "", ReachAnalysisStage.Query))
    }

    //    val minSType = QueryResult.getMinType(source)
    //    val minTType = QueryResult.getMinType(target)
    //    val minType = if (minSType <= minTType) minSType else minTType
    //    if (minType <= QResMinType.PathUri) {
    //      val as = QueryResult.convertToType(source, QResMinType.Uri)
    //      val at = QueryResult.convertToType(target, QResMinType.Uri)
    //      QRes(er.reachPathSet(as.toPorts, at.toPorts).map(PathResult))
    //    } else {
    //      val as = QueryResult.convertToType(source, QResMinType.Error)
    //      val at = QueryResult.convertToType(target, QResMinType.Error)
    //      val src = as.unitRes.collect { case er: ErrorResult => er.port -> er.errors }.toMap
    //      val sink = at.unitRes.collect { case er: ErrorResult => er.port -> er.errors }.toMap
    //      QRes(er.errorPathReachMap(src, sink).map(ErrorPathResult))
    //    }
  }

  def forwardReach(criterion: Collector): Collector = {
    reach(criterion, isForward = true)
  }

  def reach(criterion: Collector, isForward: Boolean): Collector = {
    val er = ErrorReachability(graph, st)
    if (criterion.hasErrors) {
      criterion
    } else {
      if (criterion.getResultType.isDefined) {
        val resType = criterion.getResultType.get
        resType match {
          case ResultType.Node => {
            if (isForward)
              er.forwardReachSetNode(criterion.getNodes)
            else
              er.backwardReachSetNode(criterion.getNodes)
          }
          case ResultType.Port => {
            if (isForward)
              er.forwardPortReachSet(criterion.getPorts)
            else
              er.backwardPortReachSet(criterion.getPorts)
          }
          case ResultType.Error => {
            if (isForward)
              er.forwardErrorSetReach(criterion.getPortErrors)
            else
              er.backwardErrorSetReach(criterion.getPortErrors)
          }
        }
      } else {
        Collector(st, graph, criterion.getErrors +
          errorMessageGen(TYPE_UNKNOWN, "", ReachAnalysisStage.Query))
      }
    }

    //    val minType = QueryResult.getMinType(criterion)
    //    if (minType <= QResMinType.PathUri) {
    //      val ac = QueryResult.convertToType(criterion, QResMinType.Uri)
    //      QRes(ac.unitRes.flatMap(it =>
    //        er.forwardReach(it.asInstanceOf[UriResult].value)).map(UriResult))
    //    } else {
    //      val ac = QueryResult.convertToType(criterion, QResMinType.Error)
    //      var res = imapEmpty[ResourceUri, ISet[ResourceUri]]
    //      ac.unitRes.foreach {
    //        it =>
    //          val e = it.asInstanceOf[ErrorResult]
    //          er.forwardErrorReach(e.port, e.errors).foreach {
    //            f => res += (f._1 -> (res.getOrElse(f._1, isetEmpty[ResourceUri]) ++ f._2))
    //          }
    //      }
    //      QRes(res.map(it => ErrorResult(it._1, it._2)).toSet)
    //    }
  }

  def eval(pexp: PrimaryExpr): Collector = {
    pexp match {
      case NodeNameError(nodeName, errorSet) => eval(nodeName, errorSet)

      case Paren(expr) => eval(expr)

      case NodeSet(sets) => sets.foldLeft(Collector(st, graph))((a, b) => a union eval(b))

      case NodeEmpty() => Collector(st, graph)

      case QueryName(id) => result.getOrElse(id.value, Collector(st, graph))
    }
  }

  def eval(nn: NodeName, errorSet: ISeq[ISeq[Id]]): Collector = {
    var res = isetEmpty[ResourceUri]
    if (errorSet.isEmpty) {
      getCompOrPortUri(nn)
    } else {
      val uris = getCompOrPortUri(nn)
      val errorUri = errorSet.flatMap(es =>
        SymbolTableHelper.getErrorUri(st, es.map(_.value).mkString("."))).toSet

      Collector(st,
        graph,
        Some(ResultType.Error),
        Some(Operator.ID),
        uris.getPorts,
        isetEmpty[ResourceUri],
        isetEmpty[ResourceUri],
        uris.getPorts.map((_, errorUri)).toMap)
    }
  }

  def getCompOrPortUri(n: NodeName): Collector = {
    val nId = n.ids(0)
    val node = st.getUriFromSymbol(nId.value)
    if (node.isDefined) {
      if (n.ids.length == 2) {
        val pId = n.ids(1)
        H.getUriType(node.get) match {
          case H.COMPONENT_TYPE => {
            val puri = st.componentTable(node.get).getUriFromSymbol(pId.value)
            if (puri.isDefined && H.isPort(puri.get)) {
              Collector(st,
                graph,
                Some(ResultType.Port),
                Some(Operator.ID), isetEmpty[ResourceUri] + puri.get,
                isetEmpty[ResourceUri], isetEmpty[ResourceUri] + puri.get,
                imapEmpty[ResourceUri, ISet[ResourceUri]])
            } else if (puri.isDefined && H.isFlow(puri.get)) {
              Collector(st,
                graph,
                Some(ResultType.Port),
                Some(Operator.ID), isetEmpty[ResourceUri] + puri.get,
                isetEmpty[ResourceUri], isetEmpty[ResourceUri] ++ st.componentTable(node.get).getPortsFromFlows(puri.get),
                imapEmpty[ResourceUri, ISet[ResourceUri]])
            } else {
              Collector(st, graph,
                isetEmpty[Tag] + errorMessageGen(MISSING_CRITERIA, pId.value, ReachAnalysisStage.Query))
            }
          }
          case H.CONNECTION_TYPE => {
            val puri = st.connectionTable(node.get).getUriFromSymbol(pId.value)
            if (puri.isDefined && H.isPort(puri.get)) {
              Collector(st,
                graph,
                Some(ResultType.Port),
                Some(Operator.ID), isetEmpty[ResourceUri] + puri.get,
                isetEmpty[ResourceUri], isetEmpty[ResourceUri] + puri.get,
                imapEmpty[ResourceUri, ISet[ResourceUri]])
            } else if (puri.isDefined && H.isFlow(puri.get)) {
              Collector(st,
                graph,
                Some(ResultType.Port),
                Some(Operator.ID), isetEmpty[ResourceUri] + puri.get,
                isetEmpty[ResourceUri], isetEmpty[ResourceUri] ++ st.connectionTable(node.get).getPortsFromFlows(puri.get),
                imapEmpty[ResourceUri, ISet[ResourceUri]])
            } else {
              Collector(st, graph,
                isetEmpty[Tag] + errorMessageGen(MISSING_CRITERIA, pId.value, ReachAnalysisStage.Query))
            }
          }
          case _ => Collector(st, graph)
        }
      } else {
        Collector(st,
          graph, Some(ResultType.Node), Some(Operator.ID),
          graph.nodes.filter(_.getUri.endsWith(H.ID_SEPARATOR + n.ids(0).value)).map(_.getUri).toSet,
          graph.nodes.filter(_.getUri.endsWith(H.ID_SEPARATOR + n.ids(0).value)).map(_.getUri).toSet,
          isetEmpty[ResourceUri], imapEmpty[ResourceUri, ISet[ResourceUri]])
      }
    } else {
      Collector(st, graph,
        isetEmpty[Tag] + errorMessageGen(MISSING_CRITERIA, nId.value, ReachAnalysisStage.Query))
    }
  }
}