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

package facades

import org.scalajs.jquery.JQuery

import scala.language.implicitConversions
import scala.scalajs.js

@js.native
trait Terminal extends JQuery {
  //def terminal(fn:js.Function, config:js.Dynamic): Terminal = js.native
  def terminal(fn: js.Function2[String, Terminal, Unit],
               option: js.Dictionary[Any]): Terminal = js.native

  def clear(): Nothing = js.native

  def echo(in: String): Terminal = js.native

  def echo(in: String, options: js.Dictionary[Any]): Nothing = js.native

  def error(in: String): Nothing = js.native

  def scroll_to_bottom(): Nothing = js.native

  override def resize(): Nothing = js.native

  def resize(width: Int, height: Int): Nothing = js.native

}

object Terminal {
  def apply(tag: String): Terminal = org.scalajs.jquery.jQuery(tag)

  implicit def jq2terminal(jq: JQuery): Terminal = jq.asInstanceOf[Terminal]

}