class Parser{

  constructor(fs,nearley,grammar){
    this.fs = fs
    this.nearley = nearley
    this.g = grammar
    this.dir = './Json'
  }

  parse(text){
    let parser = new this.nearley.Parser(this.nearley.Grammar.fromCompiled(this.g))
    parser.feed(text)

    let fun = parser.results[0][0][0]

    this.getTypes((typeList)=>{
      let typeNameList = Object.keys(typeList).map((key) => {if(key=='type'){return typeList[key]} }).filter((el)=>{return el != null})
      if(fun.vars.every((el)=>{return typeNameList.includes(el.type)})){
        console.log('tutte le variabili hanno un tipo esistente')
      }

    })
    return fun
  }

  getTypes(callback){
    let m = this.fs.readFile(this.dir+'/types.json','utf8',(err,data)=>{
      if (!err)
        callback(JSON.parse(data)[0])
    })

  }

}

module.exports = Parser
