import { merge } from './utils'
import defaultOptions from './defaults'
import Parser from './parser'
import Lexer from './lexer'
import Renderer from './renderer'
import InlineLexer from './inline-lexer'

class MMark {
  constructor(opts) {
    this.opts = merge({}, defaultOptions, opts)
  }

  render(src) {
    try {
      return Parser.parse(Lexer.lex(src, this.opts), this.opts)
    } catch (err) {
      err.message += '\nPlease report this to https://github.com/egoist/mmark.'
      throw err
    }
  }

  use(plugin) {
    this.opts.plugins.push(plugin)
    return this
  }
}

MMark.Renderer = Renderer
MMark.Parser = Parser
MMark.Lexer = Lexer
MMark.InlineLexer = InlineLexer

export default MMark
