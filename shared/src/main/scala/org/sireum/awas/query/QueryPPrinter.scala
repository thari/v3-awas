package org.sireum.awas.query


import org.sireum.util._
import org.sireum.{$Slang, ST, $internal}

object QueryPPrinter {

  def apply(n: QueryNode): String = {
    var result = ""
    Visitor.build({
      case id: Id =>
        result = new QueryPPrinter().print(id).render.value
        false
      case qe: QueryExpr =>
        result = new QueryPPrinter().print(qe).render.value
        false
    })(n)
    result
  }

  def qName(id: String): ST = {
    st"""$id"""
  }

  def binaryExp(lhs: ST, rhs: ST, op: String): ST = {
    st"""$lhs $op $rhs"""
  }

  def parenExpr(exp: ST): ST = {
    st"""$exp"""
  }

  def filterExp(exp: ST, op: String): ST = {
    st"""$exp:$op"""
  }

  def forwardExp(exp: ST): ST = {
    st"""reach forward $exp"""
  }

  def backwardExp(exp: ST): ST = {
    st"""reach backward $exp"""
  }

  def chopExpr(sExp: ST, tExp: ST): ST = {
    st"""reach from $sExp to $tExp"""
  }

  def pathExpr(sExp: ST, tExp: ST, wExp: org.sireum.Option[ST]): ST = {
    st"""reach paths from $sExp to $tExp${if (wExp.nonEmpty) wExp.get else ""}"""
  }

  def simpleWith(op: String, exp: ST): ST = {
    st"""$op($exp)"""
  }

  def unaryRegEX(op: String, exp: ST): ST = {
    st"""$exp$op"""
  }

  def binaryRegEX(lhs: ST, rhs: ST, op: String): ST = {
    st"""$lhs $op $rhs"""
  }

  def parenRegEx(exp: ST): ST = {
    st"""($exp)"""
  }

  def anyRegEX: ST = {
    st"""_"""
  }

  def empty: ST = {
    st"""*"""
  }

  def qRes(id: ST): ST = {
    st"""'$id"""
  }

  def nnError(nn: ST, errorSet: org.sireum.ISZ[ST]): ST = {
    st"""$nn${if (errorSet.nonEmpty) st"""{${(errorSet, ", ")}}""".render else ""}"""
  }

  def nSet(ns: org.sireum.ISZ[ST]): ST = {
    st"""${(ns, ", ")}"""
  }

  def errorId(ids: org.sireum.ISZ[ST]): ST = {
    st"""${(ids, ".")}"""
  }

  def nodeId(ids: org.sireum.ISZ[ST]): ST = {
    st"""${(ids, ".")}"""
  }

  def nodeName(ids: org.sireum.ISZ[ST]): ST = {
    st"""${(ids, ".")}"""
  }

}


final class QueryPPrinter() {
  def print(id: Id): ST = {
    QueryPPrinter.qName(id.value)
  }

  def print(qe: QueryExpr): ST = {
    qe match {
      case be: BinaryExpr => print(be)
      case pe: PrimaryExpr => print(pe)
      case fe: FilterExpr => print(fe)
      case re: ReachExpr => print(re)
    }
  }

  def print(be: BinaryExpr): ST = {
    QueryPPrinter.binaryExp(print(be.lhs), print(be.rhs), be.op)
  }

  def print(pe: PrimaryExpr): ST = {
    pe match {
      case p: Paren => print(p)
      case nne: NodeNameError => print(nne)
      case ns: NodeSet => print(ns)
      case ne: NodeEmpty => print(ne)
      case qres: QueryName => print(qres)
      case nn: NodeName => print(nn)
    }
  }

  def print(fe: FilterExpr): ST = {
    QueryPPrinter.filterExp(print(fe.lhs), fe.op.toString)
  }

  def print(re: ReachExpr): ST = {
    re match {
      case fe : ForwardExpr => print(fe)
      case be : BackwardExpr => print(be)
      case ce : ChopExpr => print(ce)
      case pe : PathExpr => print(pe)
    }
  }

  def print(fe : ForwardExpr): ST = {
    QueryPPrinter.forwardExp(print(fe.expr))
  }

  def print(fe : BackwardExpr): ST = {
    QueryPPrinter.backwardExp(print(fe.expr))
  }

  def print(ce: ChopExpr): ST = {
    QueryPPrinter.chopExpr(print(ce.source), print(ce.target))
  }

  def print(pe : PathExpr): ST = {
    QueryPPrinter.pathExpr(print(pe.source), print(pe.target), if (pe.withExpr.isDefined)
      org.sireum.Option.some[ST](print(pe.withExpr.get)) else org.sireum.Option.none[ST]())
  }

  def print(we : WithExpr): ST = {
    we match {
      case se: SimpleWith => {
        QueryPPrinter.simpleWith(se.op, print(se.expr))
      }
      case re: RegExExpr => print(re)
    }
  }

  def print(p: Paren): ST = {
    QueryPPrinter.parenExpr(print(p.expr))
  }

  def print(nne: NodeNameError): ST = {
    QueryPPrinter.nnError(print(nne.nodeName), org.sireum.ISZ(nne.errorSet.map(print): _*))
    //    val temp = stg.getInstanceOf("nnError")
    //    temp.add("nn", print(nne.nodeName))
    //    if (nne.errorSet.nonEmpty)
    //      temp.add("errorSet", nne.errorSet.map(print).asJava)
    //    temp
  }

  def print(ns: NodeSet): ST = {
    QueryPPrinter.nSet(org.sireum.ISZ(ns.sets.toSeq.map(print): _*))
  }

  def print(ne: NodeEmpty): ST = {
    QueryPPrinter.empty
  }

  def print(qn: QueryName): ST = {
    QueryPPrinter.qRes(print(qn.id))
  }

  def print(errorId: QueryNode.Seq[Id]): ST = {
    QueryPPrinter.errorId(org.sireum.ISZ(errorId.toSeq.map(print): _*))
  }

  def print(nn: NodeName): ST = {
    QueryPPrinter.nodeName(org.sireum.ISZ(nn.ids.map(print): _*))
  }

}