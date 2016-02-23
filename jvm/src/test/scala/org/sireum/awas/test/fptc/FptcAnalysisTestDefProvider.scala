/*
 Copyright (c) 2016, Robby, Kansas State University
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

package org.sireum.awas.test.fptc

import org.sireum.awas.ast.{PrettyPrinter, Tuple, Builder}
import org.sireum.awas.fptc.{FptcNode, FptcAnalysis, FptcGraph}
import org.sireum.awas.graph.AwasEdge
import org.sireum.test.{EqualTest, TestDef, TestDefProvider, TestFramework}
import org.sireum.util._
import org.sireum.util.jvm.FileUtil._

import scalax.collection.mutable.Graph

final class FptcAnalysisTestDefProvider(tf: TestFramework)
  extends TestDefProvider {
  val testcaseDir = "../../awas/jvm/src/test/resources/org/sireum/awas/test/example"
  val resultsDir = "../../awas/jvm/src/test/resources/org/sireum/awas/test/results/fptc"
  val expectedDir = "../../awas/jvm/src/test/resources/org/sireum/awas/test/expected/fptc"

  val generateExpected = false

  override def testDefs: ISeq[TestDef] = {
    val files = listFiles(toUri(testcaseDir), "awas")

    val filesEqual = files.filter { p =>
      p.toLowerCase.contains("fptc")
    }

    filesEqual.toVector.map { x =>
      val inputFileName = filename(x)
      val fileWithOutExt = extensor(inputFileName).toString
      val outputFileName = fileWithOutExt + ".fptc"
      writeResult(outputFileName, graphAnalysis(readFile(x)._1, fileWithOutExt).get)
      val result = readFile(toUri(resultsDir + "/" + outputFileName))._1
      EqualTest(filename(x), result,
        readFile(toUri(expectedDir + "/" + outputFileName))._1)
    }
  }

  def writeResult(fileName: String, graph: FptcGraph[FptcNode]) = {
    val content = new StringBuilder()

    val nodes = graph.nodes[FptcNode].map {
      n: (Graph[FptcNode, AwasEdge]#NodeT) => n.value
    }

    nodes.foreach { n: FptcNode => {
      content.append(n.toString)
      content.append("\n")
      content.append("=================")
      content.append("\n")
      content.append("##InSET##")
      content.append("\n")
      val inseq = n.getInSet.toSeq.sortBy { t: Tuple => PrettyPrinter.print(t) }
      content.append(PrettyPrinter.print(inseq.head))
      for (ist <- inseq.tail) {
        content.append("\n")
        content.append(PrettyPrinter.print(ist))
      }
      content.append("\n")
      content.append("##OutSET##")
      content.append("\n")
      val outseq = n.getOutSet.toSeq.sortBy { t: Tuple => PrettyPrinter.print(t) }
      content.append(PrettyPrinter.print(outseq.head))
      for (ist <- outseq.tail) {
        content.append("\n")
        content.append(PrettyPrinter.print(ist))
      }
      content.append("\n")
      content.append("\n")
    }
    }
    if (generateExpected) {
      val expPath = expectedDir + "/" + fileName
      writeFile(toUri(expPath), content.toString())
    }
    val resPath = resultsDir + "/" + fileName
    writeFile(toUri(resPath), content.toString())
  }


  def extensor(orig: String) = (orig.split('.') match {
    case xs@Array(x) => xs
    case y => y.init
  }).mkString

  def graphAnalysis(model: String, name: String): Option[FptcGraph[FptcNode]] = {
    Builder(model) match {
      case None => None
      case Some(m) =>
        val graph = FptcAnalysis(FptcGraph(m))
        Some(graph)
    }
  }

}