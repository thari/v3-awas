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

package org.sireum.awas

import java.awt.event.MouseEvent

import org.sireum.awas.ast.Node
import org.sireum.awas.collector.Collector
import org.sireum.awas.query.{QueryEval, QueryPPrinter, QueryParser, QueryStmt}
import org.sireum.awas.symbol.SymbolTable
import org.sireum.message.Reporter
import org.sireum.util.{ilinkedMapEmpty, _}

import scala.concurrent.duration.Duration
import scalajs.concurrent.JSExecutionContext.Implicits.queue
import scala.concurrent.{Await, ExecutionContext, Future, blocking}
import scala.util.{Failure, Success}
import scala.async.Async._
import scala.text.Document

class QueryInter(st: SymbolTable) {
  var result = ilinkedMapEmpty[String, Collector]
  var queries = ilinkedMapEmpty[String, String]
  private var reporter: Reporter = new Reporter(org.sireum.ISZ())
  private var reducedFeature: Future[ILinkedMap[String, Collector]] = Future(ilinkedMapEmpty)
  val qe = new QueryEval(st)

  def evalCmd(cmd: String): (QueryEval.Result, Reporter) = { //(QueryEval.Result, Reporter) = {
    reporter = new Reporter(org.sireum.ISZ())
    QueryParser(cmd, reporter) match {
      case Some(m) => {
        result = qe.eval(m.queryStmt.head, result)
        m.queryStmt.foreach(it =>
          queries = queries + (QueryPPrinter(it.qName) -> QueryPPrinter(it.qExpr)))
        (result, reporter)
      }
      case None => (result, reporter)
    }
  }

  def evalQueryFile(queryIns: String): Future[ILinkedMap[String, Collector]] = { //(QueryEval.Result, Reporter) = {
    reporter = new Reporter(org.sireum.ISZ())
    QueryParser(queryIns, reporter) match {
      case Some(m) => {

//        m.queryStmt
//        result = result ++ qe.eval(m)
val res = evalQueryFuture(m.queryStmt)
//        evalAsync(m.queryStmt)
        m.queryStmt.foreach(it =>
          queries = queries + (QueryPPrinter(it.qName) -> QueryPPrinter(it.qExpr)))
        res
      }
      case None => reducedFeature
    }
  }

  def getQueries: ILinkedMap[String, String] = {
    queries
  }

  def getResults: ILinkedMap[String, Collector] = {
    reducedFeature.onComplete {
      case Success(res) => result = res
      case Failure(e) => println(s"Error processing future operations, error = ${e.getMessage}")
    }
    result

  }

  def removeQueries(qName : String) : Unit = {
    if (queries.contains(qName) && getResults.contains(qName)) {
      queries = queries - qName
      result = getResults - qName
    }
  }

//  def evalAsync(queryStmts : Node.Seq[QueryStmt]) = {
//    queryStmts.map(Future(_)).foldLeft(result)((a, b) => formatResults(b, a))
//  }
//
//  def formatResults( queryStmt : Future[QueryStmt], res1 : Future[QueryEval.Result]  ): Future[QueryEval.Result] =
//    queryStmt.flatMap(r => res1.map(rr => qe.eval(r, rr)))

  def formatResults(qs: QueryStmt, res: QueryEval.Result): QueryEval.Result = {
    qe.eval(qs, res)
  }

  def evalQueryFuture(queryStmts: Node.Seq[QueryStmt])(implicit ec: ExecutionContext) = {
//    queryStmts.foreach{qs =>
//
//      result = formatResults(qs, result)
//    }

    val futures = for (qs <- queryStmts) yield {
      Future { qs }

    }

    reducedFeature = Future.foldLeft(futures)(result) { case (r, t) => formatResults(t, r) }

//    reducedFeature.onComplete{
//      case Success(res) => result = res
//      case Failure(e)       => println(s"Error processing future operations, error = ${e.getMessage}")
//    }
    reducedFeature
  }

  def getReporter: Reporter = { reporter }

}