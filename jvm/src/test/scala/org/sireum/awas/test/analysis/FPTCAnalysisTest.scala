package org.sireum.awas.test.analysis

import java.util

import org.junit.Test
import org.junit.runner.RunWith
import org.junit.runners.Parameterized
import org.junit.runners.Parameterized.Parameters
import org.sireum.test._

@RunWith(value = classOf[Parameterized])
final class FPTCAnalysisTest(name: String, td: TestDef) {
  @Test
  def test(): Unit = {
    td.test(JUnitTestFramework)
  }
}

object FPTCAnalysisTest {
  val provider = new FPTCAnalysisTestDefProvider(JUnitTestFramework)

  @Parameters(name = "{0}")
  def parameters: util.ArrayList[Array[Object]] = {
    val ps = provider.enabledTestDefs.map(td => Array(td.name, td))
    val r = new java.util.ArrayList[Array[Object]](ps.size)
    for (p <- ps) {
      r.add(p)
    }
    r
  }
}

///Users/hariharan/Documents/workspace/sireum-v3/awas/jvm/target/scala-2.12/test-classes/org/sireum/awas/test/example/fptc/fptc_base.aq
///Users/hariharan/Documents/workspace/sireum-v3/awas/jvm/target/scala-212/test-classes/org/sireum/awas/test/example/fptc/fptc_base.aq