class Parser{

  constructor(fs,nearley,grammar){
    this.fs = fs
    this.nearley = nearley
    this.g = grammar
    this.dir = './Json'
  }

  parse(text){
    var parser = new this.nearley.Parser(this.nearley.Grammar.fromCompiled(this.g))
    parser.feed(text)
    console.log(parser.results[0])
    return parser.results[0]
  }

}

module.exports = Parser
