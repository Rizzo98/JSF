class Parser{

  constructor(fs){
    this.fs = fs
    this.dir = './Json'
  }

  parse(){

  }

}

module.exports = Parser


/*
function cleaner(str,callback){
  s = ''
  p = new Promise(function(resolve, reject){
    str.split('').map(function(letter,i) {
      if(letter != '\\'){
        s += letter;
      }

    })
    resolve(s)
  })

  .then(function(result){
    s = result.replace(/\["/g,'[')
    s = s.replace(/}"/g,'}')
    s = s.replace(/}{/g,'},{')
    s = s.replace(/""/g,'')
    s = s.replace(/"{"/g,'{"')
  })

  .then(()=>{
    callback(JSON.parse(s))
  });
}

function splitDeclaration(obj,callback){
  l = []
  declarations = []
  instructions = []
  events = []

  p= new Promise((resolve,reject)=>{

    obj.forEach((el)=>{

      if(el.struct == 'instruction'){
        instructions.push(el)
      }

      if(el.struct == 'event'){
        events.push(el)
      }

      if(el.struct == 'declaration'){
        declarations.push(el)
      }

    })

    resolve()

  })

  .then(()=>{
    checkDeclarationParams(declarations,(d)=>{
      d.forEach((el)=>{
        dict = {}
        dict[el.varName] = [{'params':el.params,'type':el.type}]
        l.push(dict)
      })

    })
  })

  .then(()=>{

    checkKeyExist(l,()=>{
      checkMethods(instructions,()=>{
        checkEvents(events,()=>{

          p = new Promise((resolve,reject)=>{
            instructions.forEach((el)=>{
              l = pushInstruction(l,el)
            })
            l = pushEvents(l,events)

            resolve(l)
          })
          .then((list)=>{
            callback(list)
          })

        })
      })
    })


  });

}

function checkDeclarationParams(d,callback){
  p = new Promise((resolve,reject)=>{
    d.forEach((el)=>{
      params  = el.params.split(',')
      params = params.map((e)=>{return TryParseInt(e)})
      el.params = params
    })
    resolve()
  })

  .then(()=>{
    n = 0
    k = new Promise((res,reject)=>{
      d.forEach((el)=>{
        checkParams(el,(b)=>{if(b){n++}})
      })
      res()
    })

    .then(()=>{
      if(n==d.length){
        callback(d)
      }
    });

  })
}


function checkParams(p,callback){
  t = JSON.parse(fs.readFileSync('./jsonParser/types.json', 'utf8'))
  param = p.params
  b = false
  p = new Promise((resolve,reject)=>{

    t.forEach((t)=>{

      if (t.type == p.type){
        if(t.Nparams == param.length){
          if(param.every((el,i)=>{return typeof param[i] == t.paramsType[i] }) ){
            b = true
          }
        }
      }

    })
    resolve()
  })

  .then(()=>{
    callback(b)
  })
}

function checkEvents(l,callback){
  eListKeyPress = []
  eListPgCondition = []
  p = new Promise((resolve,reject)=>{
    l.forEach((el)=>{
      if(el.eventIn.type == 'keyPress'){
        eListKeyPress.push(el.eventIn)
      }
      else if(el.eventIn.type == 'pgCondition'){
        eListPgCondition.push(el.eventIn)
      }
      if(el.eventOut.type == 'keyPress'){
        eListKeyPress.push(el.eventOut)
      }
      else if(el.eventOut.type == 'pgCondition'){
        eListPgCondition.push(el.eventOut)
      }

    })
    resolve([eListKeyPress,eListPgCondition])
  })

  .then((liste)=>{
      getKeysName((kName)=>{
        if(!liste[0].every(x=> kName.includes(x.key)) ){
          console.log('eventi keycode non corretti')
        }
        else{
            callback()
        }

      })
  })
}

function getKeysName(callback){
  p = new Promise((resolve,reject)=>{
    keys = JSON.parse(fs.readFileSync('./jsonParser/keys.json', 'utf8'));
    kName = []
    keys.forEach((key)=>{
      kName.push(key.key)
    })

    resolve(kName)
  })

  .then((list)=>{
      callback(list)
  })
}

function checkMethods(l,callback){
  k = []
  p = new Promise((resolve,reject)=>{
      l.forEach((el)=>{
        k.push(el.method)
      })
      resolve(k)
  })

  .then((lista)=>{
    if(!lista.every(methodExist)){
      console.log('metodi non corretti')
    }
    else{
      callback()
    }

  });
}

function methodExist(element,x,array){
    methods = JSON.parse(fs.readFileSync('./jsonParser/methods.json', 'utf8'));
    mName = []
    methods.forEach((el)=>{
      mName.push(el.name)
    })

    return mName.includes(element)

}

function pushInstruction(l,i){

  param = TryParseInt(i.param)
  l.forEach((el)=>{
    if (Object.keys(el)[0]==i.varName){
      el[i.varName].push({'method': i.method,'params':param})
    }
  })
  return l
}

function pushEvents(l,e){
  l.forEach((el)=>{
    el[Object.keys(el)[0]].push({'eventIn': e[0].eventIn,'eventOut':e[0].eventOut})

  })
  return l
}

function TryParseInt(str) {
     var retValue = str;
     if(str !== null) {
         if(str.length > 0) {
             if (!isNaN(str)) {
                 retValue = parseInt(str);
             }
         }
     }
     return retValue;
}

function checkKeyExist(l,callback){

  p = new Promise(function(resolve,reject){
    temp = []
    l.forEach((el)=>{
      temp.push(Object.keys(el)[0])
    })
    resolve(temp)
  })

  .then((array)=>{
    if(array.some(duplicated)){
      console.log('doppia dichiarazione')
    }
    else{callback()}
  });

}

function duplicated(element,x,array){
  c = 0
  array.forEach((el)=>{
    if(element==el){c++}
  })
  return c>1
}
*/
