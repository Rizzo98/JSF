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

      this.checkVarName(fun.vars,()=>{
        console.log('tutte le variabili hanno nomi diversi')
        this.checkVarType(typeList,fun.vars,()=>{
          console.log('tutte le variabili sono del tipo giusto')
          this.checkParamsNumber(typeList,fun.vars,()=>{
            console.log('numero di parametri corretti')
            this.checkParamType(typeList,fun.vars,()=>{
              console.log('tipo di parametri corretti')
            })
          })
        })
      })

    })
    return fun
  }


  checkParamType(typeList,varList,callback){
    let b = true
    varList.forEach((v)=>{
      typeList.forEach((el)=>{
        if(v.type==el.type){
            for(let i=0;i<v.params.length;i++){
              if(typeof v.params[i] != el.paramsType[i].type)
                b=false
            }
        }
      })
    })

    if(b)
      callback()

  }

  checkVarName(varList,callback){
    let c=0
    varList.forEach((v)=>{
      let name = v.varName
      for(let i=0;i<varList.length;i++){
        if(name==varList[i].varName){
          c++
        }
      }
    })

    if(c==varList.length)
      callback()
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
