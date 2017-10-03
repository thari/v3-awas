package org.sireum.awas.collector

import org.sireum.awas.collector
import org.sireum.awas.collector.Operator.Operator
import org.sireum.awas.collector.ResultType.ResultType
import org.sireum.awas.fptc.FlowNode.Edge
import org.sireum.awas.fptc.{FlowEdge, FlowGraph, FlowNode}
import org.sireum.awas.symbol.SymbolTable
import org.sireum.awas.util.AwasUtil.ResourceUri
import org.sireum.util.{IMap, ISeq, ISet, Tag}

trait Collector {
  def getNodes: ISet[FlowNode]

  def getEdges: ISet[Edge]

  def getSymbolTable: SymbolTable

  def getGraph: FlowGraph[FlowNode]

  def getResultType: Option[ResultType]

  def getOperator: Option[Operator]

  def getCriteria: ISet[ResourceUri]

  def getPorts: ISet[ResourceUri]

  def getPortErrors: IMap[ResourceUri, ISet[ResourceUri]]

  def getFlows: ISet[ResourceUri]

  def getBehavior: ISet[ResourceUri]

  def getModes: ISet[ResourceUri]

  def getEvents: ISet[ResourceUri]

  def getErrors: ISet[Tag]

  def getWarnings: ISet[Tag]

  def hasErrors: Boolean

  def getPaths: ISeq[Collector]

  def union(c: Collector): Collector

  def intersect(c: Collector): Collector

  def diff(c: Collector): Collector
}

object ResultType extends Enumeration {
  type ResultType = Value
  val Node, Port, Error = Value
}

object Operator extends Enumeration {
  type Operator = Value
  val Forward,
  Backward,
  Path,
  Union,
  Intersection,
  Difference,
  ID = Value
}

object Collector {

  def apply(st: SymbolTable,
            graph: FlowGraph[FlowNode],
            nodes: ISet[FlowNode],
            ports: ISet[ResourceUri],
            resType: ResultType,
            edges: ISet[FlowEdge[FlowNode]],
            flows: ISet[ResourceUri],
            criteria: ISet[ResourceUri],
            error: ISet[Tag]
           ): Collector =
    if (resType == ResultType.Node) {
      buildNodePath(st, graph, nodes, edges, criteria, error)
    } else {
      buildPortPath(st, graph, ports, edges, flows, criteria, error)
    }


  def apply(st: SymbolTable,
            graph: FlowGraph[FlowNode],
            path: IMap[ResourceUri, ISet[ResourceUri]],
            resType: collector.ResultType.Value,
            edges: ISet[Edge],
            flows: ISet[ResourceUri],
            criteria: ISet[ResourceUri],
            errors: ISet[Tag]) =
    buildErrorPath(st, graph, path, resType, edges, flows, criteria, errors)

  def apply(st: SymbolTable,
            graph: FlowGraph[FlowNode],
            paths: ISeq[Collector],
            resType: Option[ResultType]): Collector =
    buildPathWrapper(st, graph, paths, resType)

  def apply(st: SymbolTable,
            graph: FlowGraph[FlowNode],
            nodes: ISet[FlowNode],
            edges: ISet[FlowEdge[FlowNode]],
            isForward: Boolean,
            criteria: ISet[ResourceUri],
            error: ISet[Tag]
           ): Collector =
    buildNode(st, graph, nodes, edges, isForward, criteria, error)

  def apply(st: SymbolTable,
            graph: FlowGraph[FlowNode],
            ports: ISet[ResourceUri],
            flows: ISet[ResourceUri],
            edges: ISet[Edge],
            isForward: Boolean,
            criteria: ISet[ResourceUri],
            error: ISet[Tag]): Collector =
    buildPort(st, graph, ports, flows, edges, isForward, criteria, error)


  def apply(st: SymbolTable,
            graph: FlowGraph[FlowNode],
            portError: Map[ResourceUri, ISet[ResourceUri]],
            flows: ISet[ResourceUri],
            edges: ISet[Edge],
            isForward: Boolean,
            criteria: ISet[ResourceUri],
            error: ISet[Tag]): Collector =
    buildPortError(st, graph, portError, flows, edges, isForward, criteria, error)

  def apply(st: SymbolTable,
            graph: FlowGraph[FlowNode],
            error: ISet[Tag]): Collector =
    buildError(st, graph, error)

  def apply(symbolTable: SymbolTable,
            graph: FlowGraph[FlowNode],
            resType: Option[ResultType],
            operator: Option[Operator],
            criteria: ISet[ResourceUri],
            resNodes: ISet[ResourceUri],
            resPorts: ISet[ResourceUri],
            resPortError: IMap[ResourceUri, ISet[ResourceUri]])
  : Collector = buildCriteria(
    symbolTable,
    graph,
    resType,
    operator,
    criteria,
    resNodes,
    resPorts,
    resPortError)


  def apply(symbolTable: SymbolTable,
            graph: FlowGraph[FlowNode],
            resType: Option[ResultType],
            resEdges: ISet[FlowEdge[FlowNode]],
            operator: Option[Operator],
            criteria: ISet[ResourceUri],
            resNodes: ISet[ResourceUri],
            resPorts: ISet[ResourceUri],
            resPortError: IMap[ResourceUri, ISet[ResourceUri]],
            resFlows: ISet[ResourceUri],
            resMode: ISet[ResourceUri],
            resBehav: ISet[ResourceUri],
            resEvents: ISet[ResourceUri],
            paths: ISeq[Collector],
            error: ISet[Tag]): Collector =
    buildAll(symbolTable,
      graph,
      resType,
      resEdges,
      operator,
      criteria,
      resNodes,
      resPorts,
      resPortError,
      resFlows,
      resMode,
      resBehav,
      resEvents,
      paths,
      error
    )

  def apply(st: SymbolTable,
            graph: FlowGraph[FlowNode]): Collector = buildEmpty(st, graph)

  def buildNode(st: SymbolTable,
                graph: FlowGraph[FlowNode],
                nodes: ISet[FlowNode],
                edges: ISet[FlowEdge[FlowNode]],
                isForward: Boolean,
                criteria: ISet[ResourceUri],
                error: ISet[Tag]): Collector =
    new CollectorImpl(symbolTable = st,
      graph = graph,
      resType = Some(ResultType.Node),
      resEdges = edges,
      resNodes = nodes.map(_.getUri),
      operator = if (isForward) Some(Operator.Forward) else Some(Operator.Backward),
      criteria = criteria,
      error = error)

  def buildNodePath(st: SymbolTable,
                    graph: FlowGraph[FlowNode],
                    nodes: ISet[FlowNode],
                    edges: ISet[FlowEdge[FlowNode]],
                    criteria: ISet[ResourceUri],
                    error: ISet[Tag]
                   ): Collector =
    new CollectorImpl(symbolTable = st,
      graph = graph,
      resType = Some(ResultType.Node),
      resEdges = edges,
      operator = Some(Operator.Path),
      criteria = criteria,
      resNodes = nodes.map(_.getUri),
      error = error
    )

  def buildErrorPath(st: SymbolTable,
                     graph: FlowGraph[FlowNode],
                     path: IMap[ResourceUri, ISet[ResourceUri]],
                     resType: collector.ResultType.Value,
                     edges: ISet[Edge],
                     flows: ISet[ResourceUri],
                     criteria: ISet[ResourceUri],
                     errors: ISet[Tag]): Collector =
    new CollectorImpl(symbolTable = st,
      graph = graph,
      resType = Some(resType),
      operator = Some(Operator.Path),
      criteria = criteria,
      resEdges = edges,
      resPortError = path,
      resFlows = flows,
      error = errors)


  def buildPortPath(st: SymbolTable,
                    graph: FlowGraph[FlowNode],
                    ports: ISet[ResourceUri],
                    edges: ISet[Edge],
                    flows: ISet[ResourceUri],
                    criteria: ISet[ResourceUri],
                    error: ISet[Tag]): Collector =
    new CollectorImpl(symbolTable = st,
      graph = graph,
      resType = Some(ResultType.Port),
      resEdges = edges,

      operator = Some(Operator.Path),
      criteria = criteria,
      resPorts = ports,
      resFlows = flows,
      error = error)

  def buildPathWrapper(st: SymbolTable,
                       graph: FlowGraph[FlowNode],
                       paths: ISeq[Collector],
                       resType: Option[ResultType]) =
    new CollectorImpl(symbolTable = st,
      graph = graph,
      resType = resType,
      operator = Some(Operator.Path),
      resPaths = paths)

  def buildPort(st: SymbolTable,
                graph: FlowGraph[FlowNode],
                ports: ISet[ResourceUri],
                flows: ISet[ResourceUri],
                edges: ISet[Edge],
                isForward: Boolean,
                criteria: ISet[ResourceUri],
                error: ISet[Tag]): Collector =
    new CollectorImpl(symbolTable = st,
      graph = graph,
      resType = Some(ResultType.Port),
      resEdges = edges,
      operator = if (isForward) Some(Operator.Forward) else Some(Operator.Backward),
      criteria = criteria,
      resPorts = ports,
      resFlows = flows,
      error = error)

  def buildPortError(st: SymbolTable,
                     graph: FlowGraph[FlowNode],
                     portError: Map[ResourceUri, ISet[ResourceUri]],
                     flows: ISet[ResourceUri],
                     edges: ISet[Edge],
                     isForward: Boolean,
                     criteria: ISet[ResourceUri],
                     error: ISet[Tag]): Collector =
    new CollectorImpl(symbolTable = st,
      graph = graph,
      resType = Some(ResultType.Error),
      operator = if (isForward) Some(Operator.Forward) else Some(Operator.Backward),
      criteria = criteria,
      resPortError = portError,
      resFlows = flows,
      resEdges = edges,
      error = error)


  def buildAll(symbolTable: SymbolTable,
               graph: FlowGraph[FlowNode],
               resType: Option[ResultType],
               resEdges: ISet[FlowEdge[FlowNode]],
               operator: Option[Operator],
               criteria: ISet[ResourceUri],
               resNodes: ISet[ResourceUri],
               resPorts: ISet[ResourceUri],
               resPortError: IMap[ResourceUri, ISet[ResourceUri]],
               resFlows: ISet[ResourceUri],
               resMode: ISet[ResourceUri],
               resBehav: ISet[ResourceUri],
               resEvents: ISet[ResourceUri],
               paths: ISeq[Collector],
               error: ISet[Tag]): Collector = {
    new CollectorImpl(symbolTable,
      graph,
      resType,
      resEdges,
      operator,
      criteria,
      resNodes,
      resPorts,
      resPortError,
      resFlows,
      resMode,
      resBehav,
      resEvents,
      paths,
      error)
  }

  def buildCriteria(symbolTable: SymbolTable,
                    graph: FlowGraph[FlowNode],
                    resType: Option[ResultType],
                    operator: Option[Operator],
                    criteria: ISet[ResourceUri],
                    resNodes: ISet[ResourceUri],
                    resPorts: ISet[ResourceUri],
                    resPortError: IMap[ResourceUri,
                      ISet[ResourceUri]]): Collector = {
    new CollectorImpl(symbolTable = symbolTable,
      graph = graph,
      resType = resType,
      operator = operator,
      criteria = criteria,
      resNodes = resNodes,
      resPorts = resPorts,
      resPortError = resPortError)
  }


  def buildEmpty(symbolTable: SymbolTable,
                 graph: FlowGraph[FlowNode]): Collector = {
    new CollectorImpl(symbolTable = symbolTable, graph = graph)
  }

  def buildError(symbolTable: SymbolTable,
                 graph: FlowGraph[FlowNode],
                 error: ISet[Tag]): Collector = {
    new CollectorImpl(
      symbolTable = symbolTable,
      graph = graph,
      error = error)
  }
}
