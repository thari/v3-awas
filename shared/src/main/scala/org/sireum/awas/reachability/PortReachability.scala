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

package org.sireum.awas.reachability

import org.sireum.awas.collector.Collector
import org.sireum.awas.fptc.FlowNode
import org.sireum.awas.query.ConstraintExpr
import org.sireum.awas.symbol.SymbolTable
import org.sireum.awas.util.AwasUtil.ResourceUri
import org.sireum.util.ISet


trait PortReachability[Node] extends BasicReachability[Node]{
  def forwardPortReach(criterion: ResourceUri): Collector

  def backwardPortReach(criterion: ResourceUri): Collector

  def forwardPortReachSet(criterions: Set[ResourceUri]): Collector

  def backwardPortReachSet(criterions: Set[ResourceUri]): Collector

  def forwardPortReach(criterion: FlowNode): Collector

  def backwardPortReach(criterion: FlowNode): Collector

  def forwardReach(criterion: ResourceUri): Collector

  def backwardReach(criterion: ResourceUri): Collector

  def forwardReachSet(criterion: Set[ResourceUri]): Collector

  def backwardReachSet(criterion: Set[ResourceUri]): Collector

  def reachPath(source: ResourceUri, target: ResourceUri, isRefined: Boolean): Collector

  def reachSimplePath(source: ResourceUri, target: ResourceUri, isRefined: Boolean): Collector

  def reachPathSet(source: Set[ResourceUri], target: Set[ResourceUri], isRefined: Boolean): Collector

  def reachPathSet(
    source: Set[ResourceUri],
    target: Set[ResourceUri],
    constraint: ConstraintExpr,
    isRefined: Boolean
  ): Collector

  def reachSimplePathSet(source: Set[ResourceUri], target: Set[ResourceUri], isRefined: Boolean): Collector

  def reachSimplePathSet(
    source: Set[ResourceUri],
    target: Set[ResourceUri],
    constraint: ConstraintExpr,
    isRefined: Boolean
  ): Collector

  def getSuccessor(currentPort: ResourceUri): ISet[ResourceUri]

  def getPredecessor(currentPort: ResourceUri): ISet[ResourceUri]
}

object PortReachability {
  def apply(st: SymbolTable): PortReachability[FlowNode] = {
    new PortReachabilityImpl[FlowNode](st)
  }
}