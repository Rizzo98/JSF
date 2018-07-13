class Maker{
  constructor(list,gameInstance){
    this.list = list
    this.fired = false
    this.game = gameInstance
  }

  update(){
    this.enable_obj()

    list.forEach((el)=>{
      if(el.enabled){

        if(el.counter == undefined){ //primo giro -> istanza
          el.counter=0
          el.obj = new Shield({'x':300,'y':200},el.params[0],el.params[1],el.params[2],el.params[3],this.game)
        }
        else{ //oggetto instanziato -> call dei metodi
          //TODO
          this.exec_method(el.obj,el.methods[el.counter].method)
          //console.log(el.counter + ' | ' + el.methods[el.counter].method)
          el.counter ++
          if (el.counter == el.methods.length)
            el.counter = 0
        }


      }else if(el.enabled==false){ //chiamata di event out
        el.obj.destroy()
        delete el.counter
      }

    })

  }


  exec_method(obj,method){
    try {
      obj[method]()
    } catch (e) {
      console.log(e)
    }
  }

  enable_obj(){
    this.key_listener((k)=>{

      list.forEach((el)=>{
          if(el.events.eventIn.key == k){
            el.enabled = true
          }
          if(el.events.eventOut.key == k){
            el.enabled = false
          }
      })

    })
  }

  key_listener(callback){

    document.addEventListener('keypress', (event) => {
      if(!this.fired){
        this.fired = true
        callback(event.key)
      }

    });
    document.addEventListener('keyup', (event) => {
      this.fired = false
    });
  }

}
