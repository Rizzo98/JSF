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

      this.checkVarType(typeList,fun.vars,()=>{
        console.log('tutte le variabili sono del tipo giusto')
      })

    })
    return fun
  }

  checkVarType(typeList,varList,callback){
    let p=new Promise((resolve,reject)=>{
      let typeNameList = []
      typeList.forEach((a)=>{
        typeNameList.push(a.type)
      })
      resolve(typeNameList)
    })
    .then((typeNameList)=>{
      if(varList.every((el)=>{return typeNameList.includes(el.type)})){
        callback()
      }
    })
  }

  checkParamsNumber(typeList,varList,callback){
    let b = true
    varList.forEach((v)=>{
      typeList.forEach((el)=>{
        if(v.type==el.type){
          if(el.Nparams != v.params.length){
            b=false
            console.error('errore, numero parametri non corretti')
          }
        }
      })
    })
    if(b)
    callback()
  }

  getTypes(callback){
    let m = this.fs.readFile(this.dir+'/types.json','utf8',(err,data)=>{
      if (!err)
        callback(JSON.parse(data))
    })
  }


}

module.exports = Parser
