/*
 *
 *  Copyright (c) 2017, Hariharan Thiagarajan, Kansas State University
 *  All rights reserved.
 *
 *  Redistribution and use in source and binary forms, with or without
 *  modification, are permitted provided that the following conditions are met:
 *
 *  1. Redistributions of source code must retain the above copyright notice, this
 *     list of conditions and the following disclaimer.
 *  2. Redistributions in binary form must reproduce the above copyright notice,
 *     this list of conditions and the following disclaimer in the documentation
 *     and/or other materials provided with the distribution.
 *
 *  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 *  ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 *  WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 *  DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR
 *  ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 *  (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 *  LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 *  ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 *  (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 *  SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 */

package org.sireum.awas.witness

import org.sireum.awas.ast.PrettyPrinter
import org.sireum.awas.collector.Collector
import org.sireum.awas.witness._
import org.sireum.awas.fptc._
import org.sireum.awas.slang.Aadl2Awas
import org.sireum.awas.symbol.{Resource, SymbolTable, SymbolTableHelper}
import org.sireum.awas.util.AwasUtil.ResourceUri
import org.sireum.ops.ISZOps
import org.sireum.util._
import org.sireum.{$Slang, $internal, ISZ, ST}
import scalatags.Text.all._
import org.sireum.{F, T}

object SvgGenerator {
  var viewConfig = SvgGenConfig.defaultConfig

//      SvgGenConfig(
//      rankDir = RankDir,
//      simpleConn = false,
//      complexConn = true,
//      viewVirtualPorts = true,
//      viewErrors = true,
//      viewFlows = true,
//      bindings = true)

  def apply(st: SymbolTable,
            graph: FlowGraph[FlowNode, FlowNode.Edge] with FlowGraphUpdate[FlowNode, FlowNode.Edge],
            viewConfig: SvgGenConfig, collector: Option[Collector]
  ): String = {
    this.viewConfig = viewConfig
    //    graph.setNodeAttProvider(attProvider)
    //    graph.setNodeIdProvider(nIdProvider)
    //    graph.setEdgeAttrProvider(eAttrProvider)
    //    graph.setNodeLabelProvider(nlabelProvide)

    if (!this.viewConfig.bindings) {
      FlowNode.getGraphs.foreach { gra =>
        FlowGraph.removeBindings(gra.asInstanceOf[FlowGraph[FlowNode, FlowNode.Edge] with FlowGraphUpdate[FlowNode, FlowNode.Edge]])
      }
    } else {
      FlowNode.getGraphs.foreach { gra =>
        FlowGraph.addBindings(gra.asInstanceOf[FlowGraph[FlowNode, FlowNode.Edge] with FlowGraphUpdate[FlowNode, FlowNode.Edge]])
      }
    }

    graph.setNodeToST(nodeToST(_, st))
    graph.setEdgeToST(edgeToST)
    graph.setGraphAttributes(graphAttributes)
    val res = getDot(graph, this.viewConfig, st)
      .replaceAll("label=\"<<", "label=<<")
      .replaceAll(">>\"", ">>")
    res
  }

  type Edge = FlowEdge[FlowNode]

  val H = SymbolTableHelper

  private def nodeToST(node: FlowNode, st: SymbolTable): ST = {
    st""" "${node.getUri}" [label="${getNodeLabel(node, st)}" ${
      if (H.isInPort(node.getUri)) "rank=max"
    else if (H.isOutPort(node.getUri)) "rank=min"
    else ""} shape=plaintext]"""
  }

  private def edgeToST(edge: Edge): ST = {
    st""" "${edge.source.getUri}" -> "${edge.target.getUri}" [${getEdgeAttributes(edge)}] """
  }

  private val attributeLR = st"""rankdir=LR"""

  private val attributeTB = st"""rankdir=TB"""

  private def graphAttributes = {
    ivectorEmpty[ST] :+
      (if (viewConfig.rankDir == RankDir.LR) attributeLR else attributeTB) //:+ st"""graph [splines=ortho]"""
  }

  def getDot(graph: FlowGraph[FlowNode, FlowNode.Edge], viewConfig: SvgGenConfig, st: SymbolTable): String = {
    var nST: ISZ[ST] = ISZ[ST]()
    var eST: ISZ[ST] = ISZ[ST]()
    if (!viewConfig.simpleConn.value) {
      val simpleConn = graph.nodes.filter(
        n =>
          n.getResourceType == NodeType.CONNECTION &&
            graph.getIncomingEdges(n).size == 1 && graph.getOutgoingEdges(n).size == 1
      )

      val simpleEdges = simpleConn.flatMap(n => graph.getIncomingEdges(n) ++ graph.getOutgoingEdges(n))
      nST = nST ++ ISZ((for (e <- (graph.nodes.toSet -- simpleConn).toSeq) yield st"""${nodeToST(e, st)}"""): _*)
      eST = eST ++ ISZ[ST]((for (e <- (graph.edges.toSet -- simpleEdges).toSeq) yield edgeToST(e)): _*)
      eST = eST ++ ISZ[ST](
        (for (e <- simpleConn.toSeq)
          yield
            st""" "${graph.getIncomingEdges(e).head.source.getUri}" -> "${graph.getOutgoingEdges(e)
              .head
              .target
              .getUri}" [${simpleConnToEdge(e, graph)}] """): _*
      )

    } else {
      nST = nST ++ ISZ((for (e <- graph.nodes) yield st"""${nodeToST(e, st)}""").toSeq: _*)
      eST = eST ++ ISZ[ST]((for (e <- graph.edges.toSeq) yield edgeToST(e)): _*)
    }
    val r =
      st"""digraph "${graph.getUri}" {
      |
      |  ${(graphAttributes, "\n")}
      |
      |  ${(nST, "\n")}
      |
      |  ${(eST, "\n")}
      |
      |}"""
    r.render.value
  }

  def simpleConnToEdge(conn: FlowNode, graph: FlowGraph[FlowNode, FlowNode.Edge]): String = {
    var res = ISZ[String]()
    assert(
      conn.getResourceType == NodeType.CONNECTION &&
        graph.getIncomingEdges(conn).size == 1 &&
        graph.getOutgoingEdges(conn).size == 1
    )
    res = res :+ "tailport" + "=" + "\"" + graph
      .getEdgeForPort(conn.inPorts.filter(it => H.getUriType(it).startsWith(H.PORT_IN_VIRTUAL_TYPE)).head)
      .head
      .sourcePort
      .get
      .split('$')
      .last + "\""
    res = res :+ "headport" + "=" + "\"" + graph
      .getEdgeForPort(conn.outPorts.filter(it => H.getUriType(it).startsWith(H.PORT_OUT_VIRTUAL_TYPE)).head)
      .head
      .targetPort
      .get
      .split('$')
      .last + "\""
    res = res :+ "target" + "=" + "\"" + conn.getUri + "\""
    res = res :+ "tooltip" + "=" + "\"" + conn.getUri.split(H.ID_SEPARATOR).last + "\""
    res = res ++ edgeAttrConst
    ISZOps(res).foldLeft[String]({ (x, y) => x + " " + y
    }, "")
  }

  def getNodeLabel(vertex: FlowNode, st: SymbolTable): String = {
    val inPorts = vertex.inPorts.map(it => (it.split('$').last, it, H.uri2IdString(it))).toSeq
    val outPorts = vertex.outPorts.map(it => (it.split('$').last, it, H.uri2IdString(it))).toSeq

    val errors = vertex.ports.map(it => (it, if (viewConfig.viewErrors.value) vertex.getPropagation(it).toSeq else ilistEmpty[String]))
      .toMap

    val flows =
      if (vertex.isComponent && this.viewConfig.viewFlows.value)
        if (this.viewConfig.viewErrors.value) {
          vertex.getFlows.map(it => (it._1, it._2.toString)).toSeq
        } else {
          vertex.getFlows.filter(it => it._2.fromFaults.isEmpty && it._2.toFaults.isEmpty).map(it => (it._1, it._2.toString))
            .toSeq
        }
      else ilistEmpty

    val states = if (vertex.isComponent && st.componentTable(vertex.getUri).stateMachine.isDefined) {
      st.stateMachine(st.componentTable(vertex.getUri).stateMachine.get).states.map { s =>
        (Resource.getResource(s).get.toUri, s.value.last.value)
      }.toList
    } else ilistEmpty[(ResourceUri, String)]

    val behaviour = if (vertex.isComponent && st.componentTable(vertex.getUri).behaviors.nonEmpty) {
      st.componentTable(vertex.getUri).behaviors.map { behave =>
        (behave, PrettyPrinter.print(st.componentTable(vertex.getUri).behavior(behave)))
      }.toList
    } else ilistEmpty

    val subGraphIcon = "min/images/sub-graph-icon.png"
    val label =
      if ((vertex.getResourceType == NodeType.COMPONENT) ||
        (vertex.getResourceType == NodeType.CONNECTION)) {
          tag("font")(
            attr("POINT-SIZE") := 12,
          attr("FACE") := "Courier",
          table(
            attr("border") := 0,
            attr("cellborder") := 1,
            attr("cellspacing") := 0,
            attr("cellpadding") := 1,
            attr("VALIGN") := "Middle",
            attr("TITLE") := vertex.getUri.split(H.ID_SEPARATOR).last,
            tr(
              td(
                if (vertex.isFlowDefined) colspan := 3 else colspan := 2, // attr("bgcolor") := "#eeccff",
                attr("cellpadding") := 5,
                attr("href") := "templink",
                attr("title") := "node",
                attr("target") := vertex.getUri,
                if (vertex.getSubGraph.isDefined) {
                  table(
                    attr("border") := 0,
                    attr("cellborder") := 0,
                    attr("cellspacing") := 0,
                    attr("cellpadding") := 0,
                    attr("VALIGN") := "Middle",
                    tr(
                      td(attr("cellpadding") := 0, img(src := subGraphIcon, attr("SCALE") := "TRUE")),
                      td(attr("cellpadding") := 0, b("Component: " + H.uri2IdString(vertex.getUri)))
                    )
                  )
                } else
                  b(if (vertex.isComponent) {
                    "Component: " + H.uri2IdString(vertex.getUri)
                  } else "Connection: " + H.uri2IdString(vertex.getUri))
              )
            ),
            if (flows.nonEmpty && vertex.isComponent)
              tr(
                td(attr("align") := "Center", attr("bgcolor") := "#F8F8F8", i("In ports")),
                td(attr("align") := "Center", attr("bgcolor") := "#F8F8F8", i("Flows")),
                td(attr("align") := "Center", attr("bgcolor") := "#F8F8F8", i("Out ports"))
              )
            else
              tr(
                td(attr("align") := "Center", attr("bgcolor") := "#F8F8F8", i("In ports")),
                td(attr("align") := "Center", attr("bgcolor") := "#F8F8F8", i("Out ports"))
              ),
            if (flows.nonEmpty && vertex.isComponent)
              tr(portContent(inPorts, errors), flowContent(flows), portContent(outPorts, errors))
            else tr(portContent(inPorts, errors), portContent(outPorts, errors)),
            if (states.nonEmpty)
              tr(
                td(if (vertex.isFlowDefined) colspan := 3 else colspan := 2, attr("align") := "Center", attr("bgcolor") := "#F8F8F8", i("States"))
              )
            else
              StringFrag(""),
            if (states.nonEmpty)
              tr(stateContent(states, vertex.isFlowDefined))
            else
              StringFrag(""),
            if (behaviour.nonEmpty)
              tr(
                td(if (vertex.isFlowDefined) colspan := 3 else colspan := 2, attr("align") := "Center", attr("bgcolor") := "#F8F8F8", i("Behaviors"))
              )
            else
              StringFrag(""),
            if (behaviour.nonEmpty)
              tr(behaveContent(behaviour, vertex.isFlowDefined))
            else
              StringFrag("")
          )
        ).render
        } else {
          tag("font")(
            attr("POINT-SIZE") := 12,
          attr("FACE") := "Courier",
          table(
            attr("border") := 0,
            attr("cellborder") := 1,
            attr("cellspacing") := 0,
            attr("cellpadding") := 1,
            attr("VALIGN") := "Middle",
            tr(
              td(
                colspan := 1, // attr("bgcolor") := "#eeccff",
                attr("cellpadding") := 5,
                attr("href") := "templink",
                attr("title") := "node",
                attr("target") := vertex.getUri,
                b(
                  if (H.isInPort(vertex.getUri)) "In port : " + H.uri2IdString(vertex.getUri)
                  else "Out port : " + H.uri2IdString(vertex.getUri)
                )
              )
            ),
            if (H.isInPort(vertex.getUri)) tr(portContent(inPorts, errors))
            else tr(portContent(outPorts, errors))
          )
        ).render
      }
    "<" + label + ">"
  }

  private def flowContent(flows: Seq[(ResourceUri, String)]) =
    td(
      attr("cellpadding") := 0,
      table(
        attr("border") := 0,
        attr("cellspacing") := 0,
        attr("cellpadding") := 0,
        for ((uri, text) <- flows)
          yield
            tr(
              td(
                attr("cellpadding") := 0,
                table(
                  attr("border") := 0,
                  attr("cellspacing") := 0,
                  attr("cellpadding") := 0,
                  tr(
                    td(
                      attr("border") := 0,
                      attr("href") := "templink",
                      attr("title") := "flow",
                      attr("target") := uri,
                      attr("cellpadding") := 0,
                      id := "badlink",
                      attr("cellspacing") := 0,
                      tabledata(text, false)
                    )
                  )
                )
              )
            )
      )
    )

  private def stateContent(states: List[(ResourceUri, String)], isFlow: Boolean) =
    td(if (isFlow) colspan := 3 else colspan := 2,
      attr("cellpadding") := 0,
      table(
        attr("border") := 0,
        attr("cellspacing") := 0,
        attr("cellpadding") := 0,
        for ((uri, text) <- states)
          yield
            tr(
              td(
                attr("cellpadding") := 0,
                table(
                  attr("border") := 0,
                  attr("cellspacing") := 0,
                  attr("cellpadding") := 0,
                  tr(
                    td(
                      attr("border") := 0,
                      attr("href") := "templink",
                      attr("title") := "state",
                      attr("target") := uri,
                      attr("cellpadding") := 0,
                      id := "badlink",
                      attr("cellspacing") := 0,
                      tabledata(text, false)
                    )
                  )
                )
              )
            )
      )
    )

  private def behaveContent(behave: List[(ResourceUri, String)], isFlow: Boolean) =
    td(if (isFlow) colspan := 3 else colspan := 2,
      attr("cellpadding") := 0,
      table(
        attr("border") := 0,
        attr("cellspacing") := 0,
        attr("cellpadding") := 0,
        for ((uri, text) <- behave)
          yield
            tr(
              td(
                attr("cellpadding") := 0,
                table(
                  attr("border") := 0,
                  attr("cellspacing") := 0,
                  attr("cellpadding") := 0,
                  tr(
                    td(
                      attr("border") := 0,
                      attr("href") := "templink",
                      attr("title") := "behavior",
                      attr("target") := uri,
                      attr("cellpadding") := 0,
                      id := "badlink",
                      attr("cellspacing") := 0,
                      tabledata(text, false)
                    )
                  )
                )
              )
            )
      )
    )



  private def portContent(inPorts: Seq[(String, ResourceUri, String)], errors: IMap[String, Seq[String]]) =
    if (inPorts.nonEmpty)
      td(
        attr("cellpadding") := 0,
        table(
          attr("border") := 0,
          attr("cellspacing") := 0,
          attr("cellpadding") := 0,
          attr("ROWS") := "*",
          for ((portid, uri, text) <- inPorts)
            yield
              tr(
                td(
                  attr("cellpadding") := 0,
                  table(
                    attr("border") := 0,
                    attr("cellspacing") := 0,
                    attr("cellpadding") := 0,
                    tr(
                      td(
                        attr("port") := portid,
                        attr("href") := "templink",
                        attr("title") := "port",
                        attr("border") := 0,
                        if (errors(uri).size > 1) colspan := errors(uri).size else colspan := 1,
                        //if(errors(uri).isEmpty) attr("border") := 1 else attr("border") := 0, attr("sides") := "B",
                        attr("target") := uri,
                        attr("cellpadding") := 0,
                        id := "badlink",
                        attr("cellspacing") := 0,
                        tabledata(text, false)
                      )
                    ),
                    tr(
                      if (errors(uri).nonEmpty)
                        for (error <- errors(uri))
                          yield
                            td(
                              attr("target") := "Error" + ":" + uri + ':' + error,
                              attr("href") := "templink",
                              attr("title") := "error",
                              attr("cellpadding") := 2, //id := "badlink", attr("border") := 1, attr("sides") := "B",
                              attr("cellspacing") := 0,
                              tag("font")(
                                attr("POINT-SIZE") := 8,
                                tabledata(
                                  H.uri2CanonicalName(error),
                                  if (inPorts.last != (portid, uri, text)) true
                                  else false
                                )
                              )
                            )
                      else
                        td()
                    )
                  )
                )
              )
        )
      )
    else td()

  private def tabledata(text: String, border: Boolean) =
    table(
      attr("border") := 0,
      attr("bgcolor") := "white",
      attr("cellborder") := 0,
      attr("cellspacing") := 0,
      attr("cellpadding") := 0,
      tr(
        if (border)
          td( //attr("border") := 0, attr("sides") := "B",
            attr("cellspacing") := 0,
            attr("cellpadding") := 0,
            text
          )
        else td(text)
      )
    )

  val edgeAttrConst = ISZ[String](
    "edgehref" + "=" + "templink",
    "title" + "=" + "edgetype",
    "arrowsize" + "=" + "1",
    "weight" + "=" + "1",
    "penwidth" + "=" + "2"
  )

  def getEdgeAttributes(component: Edge): String = {
    var res = ISZ[String]()
    res = res :+ "tailport" + "=" + "\"" + component.sourcePort.get.split('$').last + "\""
    res = res :+ "headport" + "=" + "\"" + component.targetPort.get.split('$').last + "\""
    res = res :+ "target" + "=" + "\"" + "Edge+" + component.sourcePort.get + "+" + component.targetPort.get + "\""
    res = res ++ edgeAttrConst
    ISZOps(res).foldLeft[String]({ (x, y) => x + " " + y
    }, "")
  }



  def getCurrentConfig(): SvgGenConfig = this.viewConfig

}
