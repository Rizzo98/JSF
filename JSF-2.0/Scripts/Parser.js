class Parser{

  constructor(fs,nearley,grammar){
    this.fs = fs
    this.nearley = nearley
    this.g = grammar
    this.dir = './Json'
  }

  parse(text,callback){
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
              this.checkLoopVars(fun.vars,fun.loop,()=>{
                console.log('nomi variabili in loop corretti')
                this.checkLoopMethodsName(fun.vars,fun.loop,typeList,()=>{
                  console.log('nomi metodi in loop corretti')
                  this.checkLoopMethodsParam(fun.vars,fun.loop,typeList,()=>{
                    console.log('tipo e numero di parametri in loop corretti')
                    this.checkEvent(fun.events,()=>{
                      console.log('eventi corretti')
                      callback(fun)
                    })
                  })
                })
              })
            })
          })
        })
      })

    })

  }

  checkEvent(eventList,callback){
    let p = new Promise((resolve,reject)=>{

      let m = this.fs.readFile(this.dir+'/keys.json','utf8',(err,data1)=>{
        if (!err){
          let r = this.fs.readFile(this.dir+'/playerParams.json','utf8',(err,data2)=>{
            if (!err){
              resolve([JSON.parse(data1).map(i=>i.code),JSON.parse(data2).map(i=>i.name)])
            }
          })
        }
      })

    })

    .then((p)=>{

      let eventOk = eventList.every((el)=>{
                        if (el.type =='keyPress'){
                          if (p[0].includes(el.key))
                            return true
                          else
                            return false
                        }else if(el.type == 'condition'){
                          if (p[1].includes(el.param))
                            return true
                          else
                            return false
                        }
                      })

      if (eventOk)
        callback()

    })
  }

  checkLoopMethodsParam(varList,loopList,typeList,callback){
    let varNames = varList.map((x)=>{let a = {}; a[x.varName]=x.type; return a})

    let methodsName = loopList.every((el)=>{
      let type = varNames.filter(i => Object.keys(i)[0]==el.var )[0][el.var]
      let method = typeList.filter(i => i.type == type)[0].methods.filter(i => i.name == el.method)[0]

      let isRightNumber = (el.paramsNumber==method.paramsType.length)
      let isCorrectType = el.params.every((i,index)=>{return typeof i == method.paramsType[index].type})
      let isInTheRange = el.params.every((i,index)=>{
        if(typeof i =='number'){
          return (i>=method.paramsType[index].min && i<=method.paramsType[index].max)
        }else{
          return true
        }
      })

      if(isRightNumber && isCorrectType && isInTheRange)
        return true
      else
        return false
    })

    if(methodsName)
      callback()
  }

  checkLoopMethodsName(varList,loopList,typeList,callback){
    let varNames = varList.map((x)=>{let a = {}; a[x.varName]=x.type; return a})

    let methodsName = loopList.every((el)=>{
      let type = varNames.filter(i => Object.keys(i)[0]==el.var )[0][el.var]
      let methods = typeList.filter(i => i.type == type)[0].methods
      let methodsName = methods.map(i => i.name)
      return methodsName.includes(el.method)
    })

    if(methodsName)
      callback()
  }

  checkLoopVars(varList,loopList,callback){
    let l = varList.map((x)=> x.varName)
    if(loopList.every(x => l.includes(x.var)))
      callback()
  }

  checkParamType(typeList,varList,callback){
    let b = true
    varList.forEach((v)=>{
      typeList.forEach((el)=>{
        if(v.type==el.type){
            for(let i=0;i<v.params.length;i++){
              if(typeof v.params[i] != el.paramsType[i].type)
                b=false
              if(v.params[i]<el.paramsType[i].min || v.params[i]>el.paramsType[i].max)
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
