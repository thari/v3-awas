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

package org.sireum.awas.awasfacade;

import org.sireum.awas.fptc.FlowGraph;
import org.sireum.awas.fptc.FlowNode;
import org.sireum.awas.query.Model;
import org.sireum.awas.query.QueryBuilder;
import org.sireum.awas.query.QueryBuilder$;
import org.sireum.awas.query.QueryEval;
import org.sireum.awas.reachability.ErrorReachability;
import org.sireum.awas.reachability.ErrorReachability$;
import org.sireum.awas.reachability.PortReachability;
import org.sireum.awas.reachability.PortReachability$;
import org.sireum.awas.symbol.SymbolTable;
import org.sireum.awas.symbol.SymbolTableHelper;
import org.sireum.awas.util.AwasUtil;
import org.sireum.awas.util.JavaConverters;

import java.util.*;
import java.util.stream.Collectors;

import static org.sireum.awas.util.JavaConverters.*;



public class AwasGraphImpl implements AwasGraph {
    private FlowGraph<FlowNode> graph;

    private SymbolTable st;

    private PortReachability<FlowNode> pr;

    private ErrorReachability<FlowNode> er;

    public AwasGraphImpl(FlowGraph<FlowNode> graph, SymbolTable st) {
        this.graph = graph;
        this.st = st;
        this.pr = PortReachability$.MODULE$.apply(graph);
        this.er = ErrorReachability$.MODULE$.apply(graph);
    }

    /**
     * Returns the forward reachability/slice of the criterion
     *
     * @param criterion string representation of AWAS node URI
     * @return the URIs that are reachable
     */
    @Override
    public Set<String> forwardReach(String criterion) {
        return toJavaSet((pr.forwardReach(criterion)));
    }

    /**
     * Returns the backward reachability/slice of the criterion
     *
     * @param criterion string representation of AWAS node URI
     * @return the Uris that are reachable
     */
    @Override
    public Set<String> backwardReach(String criterion) {
        return toJavaSet((pr.backwardReach(criterion)));
    }

    @Override
    public Set<String> forwardPortReach(String criterion) {
        return toJavaSet((pr.forwardPortReach(criterion)));
    }

    @Override
    public Set<String> backwardPortReach(String criterion) {
        return toJavaSet((pr.backwardPortReach(criterion)));
    }

    /**
     * Returns the forward reachability/slice of the criterion
     *
     * @param criterion dot separated component name or port name
     *                  eg: Foo - a component named 'Foo'
     *                  Foo.bar - a port 'bar' belonging to component 'Foo'
     * @return reachable URIs
     */
    @Override
    public Set<String> forwardReachUsingNames(String criterion) {
        return toJavaSet(pr.forwardReach(
                toJavaOptional(SymbolTableHelper
                        .getUriFromString(st, criterion)).orElse(""))
        );
    }

    /**
     * Returns the backward reachability/slice of the criterion
     *
     * @param criterion dot separated component name or port name
     *                  eg: Foo - a component named 'Foo'
     *                  Foo.bar - a port 'bar' belonging to component 'Foo'
     * @return reachable URIs
     */
    @Override
    public Set<String> backwardReachUsingNames(String criterion) {
        return toJavaSet(pr.backwardReach(
                toJavaOptional(SymbolTableHelper
                        .getUriFromString(st, criterion)).orElse(""))
        );
    }

    @Override
    public Map<String, Set<String>> forwardErrorReachUsingNames(String port, String... errors) {
        String portUri = toJavaOptional(SymbolTableHelper.
                getUriFromString(st, port)).orElse("");
        Set<String> errorsUri = new HashSet<String>();
        for (String error : errors) {
            String errorUri = toJavaOptional(SymbolTableHelper.
                    getErrorUri(st, error)).orElse("");
            errorsUri.add(errorUri);
        }
        scala.collection.immutable.Map<String, scala.collection.immutable.Set<String>> temp = er.forwardErrorReach(
                portUri, scala.collection.JavaConverters.asScalaSet(errorsUri).toSet());
        return AwasUtil.toJavaMap(temp);
    }

    @Override
    public Map<String, Set<String>> backwardErrorReachUsingNames(String port, String... errors) {
        String portUri = toJavaOptional(SymbolTableHelper.
                getUriFromString(st, port)).orElse("");
        Set<String> errorsUri = new HashSet<String>();
        for (String error : errors) {
            String errorUri = toJavaOptional(SymbolTableHelper.
                    getErrorUri(st, error)).orElse("");
        }
        scala.collection.immutable.Map<String, scala.collection.immutable.Set<String>> temp = er.backwardErrorReach(
                portUri, scala.collection.JavaConverters.asScalaSet(errorsUri).toSet());
        return AwasUtil.toJavaMap(temp);
    }

    public Map<String, String> queryEvaluator(String query) {
        Optional<Model> queryModel = JavaConverters.toJavaOptional(QueryBuilder$.MODULE$.apply(query,
                QueryBuilder.apply$default$2(),
                QueryBuilder.apply$default$3()));

        return queryModel.map(model -> toJavaMap(QueryEval.apply(model, graph, st)).entrySet()
                .stream()
                .collect(Collectors.toMap(Map.Entry::getKey, e -> e.getValue().toString()))).orElseGet(HashMap::new);
    }

    @Override
    public FlowGraph<FlowNode> getGraph() {
        return graph;
    }

    @Override
    public String getDotGraph() {
        return graph.toDot();
    }
}
