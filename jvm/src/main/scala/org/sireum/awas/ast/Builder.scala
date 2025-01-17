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

package org.sireum.awas.ast

import org.antlr.v4.runtime._
import org.antlr.v4.runtime.tree._
import org.sireum.awas.parser.Antlr4AwasParser._
import org.sireum.util._
import org.sireum.util.jvm.Antlr4Util._

import scala.collection._

final class Builder private() {

  private implicit val nodeLocMap = midmapEmpty[AnyRef, LocationInfo]

  def build(fileUriOpt: Option[FileResourceUri],
            ctx: ModelContext): Model = {
    val r = Model(ctx.typeDecl().map(build),
      ctx.behaviorDecl().map(build),
      ctx.constantDecl().map(build),
      if (ctx.componentDecl() != null) Some(build(ctx.componentDecl())) else None
      //      ctx.componentDecl().map(build),
      //      ctx.connectionDecl().map(build),
      //      ctx.deploymentDecl().map(build)
    ) at ctx
    r.nodeLocMap = this.nodeLocMap
    r.fileUriOpt = fileUriOpt
    r
  }

  def build(ctx: TypeDeclContext): TypeDecl =
    ctx match {
      case ctx: AliasTypeDeclContext => build(ctx.asInstanceOf[AliasTypeDeclContext].typeAliasDecl())
      case ctx: EnumTypeDeclContext => build(ctx.asInstanceOf[EnumTypeDeclContext].enumDecl())
      case ctx: LatticeTypeDeclContext => build(ctx.asInstanceOf[LatticeTypeDeclContext].latticeDecl())
      case ctx: RecordTypeDeclContext => build(ctx.asInstanceOf[RecordTypeDeclContext].recordDecl())
    }

  def build(ctx: BehaviorDeclContext): StateMachineDecl = {
    StateMachineDecl(buildId(ctx.smName),
      Node.emptySeq ++ ctx.states().state.map(it => Name(Node.emptySeq[Id] :+ buildId(it))),
      Node.emptySeq ++ ctx.events().event.map(it => Name(Node.emptySeq[Id] :+ buildId(it)))) at ctx
  }

  def build(ctx: ConstantDeclContext): ConstantDecl = {
    ConstantDecl(build(ctx.name()), build(ctx.`type`()), build(ctx.init())) at ctx
  }

  def build(ctx: ComponentDeclContext): ComponentDecl = {
    ComponentDecl(buildId(ctx.compName),
      if (ctx.`with` != null) ctx.`with`.map(build) else Node.emptySeq[Name],
      ctx.port().map(build),
      ctx.propagation().map(build),
      ctx.flow().map(build),
      if (ctx.transition() != null) Some(build(ctx.transition())) else None,
      if (ctx.behaviour() != null) Some(build(ctx.behaviour())) else {
        None
      },
      ctx.componentDecl().map(build),
      ctx.connectionDecl().map(build),
      ctx.deploymentDecl().map(build),
      ctx.property().map(build)
    ) at ctx
  }

  def build(ctx: ConnectionDeclContext): ConnectionDecl = {
    ConnectionDecl(buildId(ctx.connName),
      if (ctx.fromComponent != null) Some(build(ctx.fromComponent)) else None,
      buildId(ctx.fromPort),
      if (ctx.connType.getText == "<->") {
        true
      } else {
        false
      },
      if (ctx.toComponent != null) Some(build(ctx.toComponent)) else None,
      buildId(ctx.toPort),
      ctx.flowc().map(build),
      if (ctx.behaviour() != null) Some(build(ctx.behaviour())) else None,
      ctx.property().map(build)) at ctx
  }

  def build(ctx: DeploymentDeclContext): DeploymentDecl = {
    DeploymentDecl(build(ctx.fromComponent),
      if (ctx.fromPort != null) Some(buildId(ctx.fromPort)) else None,
      build(ctx.toComponent),
      if (ctx.toPort != null) Some(buildId(ctx.toPort)) else None) at ctx
  }

  def build(ctx: TypeAliasDeclContext): AliasDecl = {
    AliasDecl(build(ctx.name()), build(ctx.basicType())) at ctx
  }

  def build(ctx: EnumDeclContext): EnumDecl = {
    EnumDecl(buildId(ctx.n), ctx.supers.map(build), ctx.elements.map(buildId)) at ctx
  }

  def build(ctx: LatticeDeclContext): LatticeDecl = {
    LatticeDecl(buildId(ctx.n), ctx.supers.map(build)) at ctx
  }

  def build(ctx: RecordDeclContext): RecordDecl = {
    RecordDecl(buildId(ctx.ID()), ctx.field().map(build)) at ctx
  }

  def build(ctx: FieldContext): FieldDecl = {
    FieldDecl(buildId(ctx.ID()), build(ctx.`type`())) at ctx
  }

  def build(ctx: PortContext): Port = {
    val mod = ctx.mod.getText.equals("in")
    Port(mod, buildId(ctx.ID()),
      if (ctx.name() != null) Some(build(ctx.name())) else None) at ctx
  }

  def build(ctx: PropagationContext): Propagation = {
    Propagation(buildId(ctx.id), ctx.errorT.map(build)) at ctx
  }

  def build(ctx: FlowContext): Flow = {
    Flow(buildId(ctx.id),
      arbitraryToken(ctx.from),
      ctx.fromE.map(build),
      arbitraryToken(ctx.to),
      ctx.toE.map(build)) at ctx
  }

  def build(ctx: FlowcContext): CFlow = {
    CFlow(buildId(ctx.id),
      ctx.fromE.map(build),
      ctx.toE.map(build)) at ctx
  }

  def arbitraryToken(n: Token): Option[Id] = {
    n match {
      case null => None
      case no => no.getText match {
        case "_" => None
        case _ => Some(buildId(no))
      }
    }
  }

  def build(ctx: PropertyContext): Property = {
    Property(buildId(ctx.ID()),
      //      build(ctx.`type`()),
      if (ctx.init() != null) Some(build(ctx.init())) else None,
      imapEmpty) at ctx
  }

  def build(ctx: TransitionContext): Transition = {
    Transition(ctx.transExpr().map(build)) at ctx
  }

  def build(ctx: TransExprContext): TransExpr = {
    TransExpr(
      buildId(ctx.id),
      ctx.fromState.ids.map(buildId),
      ctx.toState.ids.map(buildId),
      if (ctx.propCond != null) Some(build(ctx.propCond)) else None
    )
  }

  def build(ctx: BehaviourContext): Behaviour = {
    Behaviour(ctx.expression().map(build)) at ctx
  }

  def build(ctx: ExpressionContext): BehaveExpr = {
    BehaveExpr(
      buildId(ctx.id),
      if(ctx.key != null) Some(build(ctx.key)) else None,
      if(ctx.value != null) Some(build(ctx.value)) else None,
      if(ctx.st != null) ctx.st.ids.map(buildId) else Node.emptySeq[Id]
    ) at ctx
  }

  def build(ctx: ConditionContext): ConditionTuple = {
    ctx match {
      case andor: AndOrContext => build(andor)
      case ormoreless: OrMoreLessContext => build(ormoreless)
      case all: AllContext => build(all)
      case primary: PrimaryCondContext => build(primary.primaryCondition())
    }
  }

  def build(ctx: AndOrContext): ConditionTuple = {
    if (ctx.op.getText == "and") {
      And(build(ctx.lhs), build(ctx.rhs))
    } else {
      Or(build(ctx.lhs), build(ctx.rhs))
    }
  }

  def build(ctx: OrMoreLessContext): ConditionTuple = {
    if (ctx.op.getText == "or more") {
      OrMore(ctx.`val`.getText.toInt, ctx.cond.map(build))
    } else {
      OrLess(ctx.`val`.getText.toInt, ctx.cond.map(build))
    }
  }

  def build(ctx: AllContext): All = {
    All(ctx.cond.map(build))
  }

  def build(ctx: PrimaryConditionContext): PrimaryCondition = {
    ctx match {
      case er: EventRefContext => EventRef(er.idGroup().ids.map(buildId))
      case t: TupContext => build(t.tuple())
    }
  }

  def build(ctx: TupleContext): Tuple = {
    var result = ilistEmpty[(Id, One)]
    if(ctx != null) {
      ctx.faultPort().foreach { fp =>
        result = result :+ ((buildId(fp.ID()), build(fp.one())))
      }
    }
    Tuple(result)
  }

  def build(ctx: OneContext): One = {
    ctx match {
//      case ctx: NoFailureContext => NoFailure()
//      case ctx: WildCardContext => Wildcard()
//      case ctx: VariableContext => Variable(buildId(ctx.ID()))
      case ctx: FaultRefContext => build(ctx.fault())
      case ctx: FaultSetContext => FaultSet(ctx.fault().map(build))
    }
  }

  def build(ctx: FaultContext): Fault = {
    Fault(build(ctx.name()))
  }

  def build(ctx: NameContext): Name = {
    Name(ctx.ID().map(toToken _ andThen buildId)) at ctx
  }

  def buildId(t: Token): Id = {
    Id(t.getText.intern()) at t
  }

  def build(ctx: TypeContext): Type = {
    ctx match {
      case ctx: BaseTypeContext => build(ctx.basicType())
      case ctx: OptionTypeContext => OptionTypeDecl(build(ctx.`type`())) at ctx
      case ctx: SetTypeContext => SetTypeDecl(build(ctx.`type`())) at ctx
      case ctx: SeqTypeContext => SeqTypeDecl(build(ctx.`type`())) at ctx
      case ctx: MapTypeContext => MapTypeDecl(build(ctx.key), build(ctx.value)) at ctx
    }
  }

  def build(ctx: BasicTypeContext): BasicType = {
    ctx match {
      case ctx: BooleanTypeContext => BooleanTypeDecl() at ctx
      case ctx: IntegerTypeContext => IntegerTypeDecl(
        if (ctx.hi != null) Some((build(ctx.lo), build(ctx.hi))) else None) at ctx
      case ctx: RealTypeContext => RealTypeDecl() at ctx
      case ctx: StringTypeContext => StringTypeDecl() at ctx
      case ctx: ComponentTypeContext => ComponentTypeDecl() at ctx
      case ctx: PortTypeContext => PortTypeDecl() at ctx
      case ctx: NamedTypeContext => NamedTypeDecl(build(ctx.name())) at ctx
    }
  }

  def build(ctx: IntConstantContext): IntTypeDisc = {
    ctx match {
      case ctx: LitIntConstantContext => IntLit(ctx.INTEGER().getText.toInt) at ctx
      case ctx: NamedIntConstantContext => NamedIntType(build(ctx.name())) at ctx
      case ctx: ArbitraryIntConstantContext => ArbitrartyIntType() at ctx
    }
  }

  def build(ctx: InitContext): Init = {
    ctx match {
      case ctx: TrueContext => BooleanInit(true) at ctx
      case ctx: FalseContext => BooleanInit(false) at ctx
      case ctx: IntegerContext => IntegerInit(ctx.INTEGER().getText.toInt) at ctx
      case ctx: RealContext => RealInit(ctx.REAL().getText.toDouble) at ctx
      case ctx: StringContext =>
        val text = ctx.STRING().getText
        StringInit(text.substring(1, text.length - 1).intern()) at ctx
      case ctx: RecordContext => RecordInit(build(ctx.name()), ctx.ID().map(t => buildId(t) ->
        build(ctx.init(ctx.ID().indexOf(t))))(breakOut): IMap[Id, Init]) at ctx
      case ctx: NameRefContext => NameRefInit(build(ctx.name()),
        if (ctx.ID() != null) Some(buildId(ctx.ID())) else None) at ctx
      case ctx: NoneContext => NoneInit(build(ctx.`type`())) at ctx
      case ctx: SomeContext => SomeInit(build(ctx.`type`()), build(ctx.init())) at ctx
      case ctx: SetContext => SetInit(build(ctx.`type`()), ctx.init().map(build).toSet) at ctx
      case ctx: SeqContext => SeqInit(build(ctx.`type`()), ctx.init().map(build)) at ctx
      case ctx: MapContext =>
        var mapinit = imapEmpty[Init, Init]
        ctx.mapEntry().forEach(mp => {
          mapinit = mapinit + (build(mp.key) -> build(mp.value))
        })
        MapInit(build(ctx.key), build(ctx.value), mapinit) at ctx
    }
  }

  import scala.collection.JavaConverters._
  import scala.language.implicitConversions

  @inline
  private implicit def toNodeSeq[T](ns: java.lang.Iterable[T]): Node.Seq[T] =
    Node.seq[T](ns.asScala)

  @inline
  private implicit def toToken(n: TerminalNode): Token = n.getSymbol

  @inline
  private implicit def toLinkedSet[T](n: Vector[T]): ILinkedSet[T] = {
    var res = ilinkedSetEmpty[T]
    n.foreach(x => res = res + x)
    res
  }
}

object Builder {

  def apply(fileUriOpt: Option[FileResourceUri],
            input: String,
            maxErrors: Natural = 0,
            reporter: Reporter = ConsoleReporter): Option[Model] = {
    class ParsingEscape extends RuntimeException

    import org.sireum.awas.parser.{Antlr4AwasLexer, Antlr4AwasParser}

    val inputStream = CharStreams.fromString(input)
    val lexer = new Antlr4AwasLexer(inputStream)
    val tokens = new CommonTokenStream(lexer)
    val parser = new Antlr4AwasParser(tokens)
    parser.removeErrorListeners()
    var success = true
    parser.addErrorListener(new BaseErrorListener {
      var errors = 0

      override def syntaxError(recognizer: Recognizer[_, _],
                               offendingSymbol: Any,
                               line: PosInteger,
                               charPositionInLine: PosInteger,
                               msg: String,
                               e: RecognitionException): Unit = {
        success = false
        val token = offendingSymbol.asInstanceOf[Token]
        val start = token.getStartIndex
        reporter.error(line, charPositionInLine, start, msg + " (token=" + token.getType + ")")
        errors += 1
        if (maxErrors > 0 && errors >= maxErrors) {
          throw new ParsingEscape
        }
      }
    })
    val mfOpt: Option[ModelFileContext] =
      try {
        success = true
        Some(parser.modelFile())
      } catch {
        case t: Throwable => None
      }
    if (success)
      mfOpt.map(mf => new Builder().build(fileUriOpt,mf.model()))
    else
      None
  }

  trait Reporter {
    def error(line: PosInteger,
              column: PosInteger,
              offset: Natural,
              message: String): Unit
  }

  object ConsoleReporter extends Reporter {
    override def error(line: PosInteger,
                       column: PosInteger,
                       offset: Natural,
                       message: String): Unit = {
      Console.err.println("[" + line + ", " + column + "] " + message)
      Console.err.flush()
    }
  }
}