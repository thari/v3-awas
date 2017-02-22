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

package org.sireum.awas.test.Query

import java.nio.file.Paths

import org.sireum.awas.ast.Builder
import org.sireum.awas.fptc.FptcGraph
import org.sireum.awas.query.{QueryBuilder, QueryEval}
import org.sireum.awas.symbol.SymbolTable
import org.sireum.awas.util.TestUtils._
import org.sireum.test.{EqualTest, TestDef, TestDefProvider, TestFramework}
import org.sireum.util._
import org.sireum.util.jvm.FileUtil._


final class QueryTestDefProvider(tf: TestFramework) extends TestDefProvider {
  val testDirs = Seq(makePath("..", "example", "Query"))

  val resultsDir = toFilePath(fileUri(this.getClass, makePath("..", "results", "query")))
  val expectedDir = toFilePath(fileUri(this.getClass, makePath("..", "expected", "query")))

  val generateExpected = true

  override def testDefs: ISeq[TestDef] = {
    val files = testDirs.flatMap { d =>
      listFiles(fileUri(this.getClass, d), "awas")
    }

    val filesEqual = files.filter { p =>
      p.toLowerCase.contains("awas")
    }

    filesEqual.toVector.map { x =>
      val inputFileName = filename(x)
      print(inputFileName)
      val fileWithOutExt = extensor(inputFileName).toString

      val modelFile = x
      val queryFile = extensor(x) + ".aq"
      var inputs = imapEmpty[FileResourceUri, FileResourceUri]
      inputs = inputs + (modelFile -> queryFile)

      val outputFileName = fileWithOutExt + ".qres"

      println(queryFile)
      writeResult(outputFileName,
        QueryResultPrinter(x, readFile(x)._1,
          readFile(queryFile)._1), expectedDir, resultsDir, generateExpected)


      EqualTest(fileWithOutExt,
        readFile(toUri(makePath(resultsDir, outputFileName)))._1,
        readFile(toUri(makePath(expectedDir, outputFileName)))._1)
    }
  }

  def QueryResultPrinter(modelfile: FileResourceUri, model: String,
                         query: String): String = {
    import org.sireum.util.jvm.FileUtil._
    val basePath = Paths.get(fileUri(this.getClass, s".."))
    val relativeUri = basePath.relativize(Paths.get(modelfile))

    Builder(Some(relativeUri.toString), model) match {
      case None => ""
      case Some(m) =>
        implicit val reporter: AccumulatingTagReporter = new ConsoleTagReporter
        var st = SymbolTable(m)
        val graph = FptcGraph(m, st)
        QueryBuilder(query) match {
          case None => ""
          case Some(q) =>
            val res = QueryEval(q, graph, st)
            var result = ""
            res.foreach { r =>
              result += r._1
              result += "\n -------------- \n"
              result += r._2.toSeq.sorted.mkString("\n")
              result += "\n -------------- \n"
            }
            result
        }
    }

  }
}