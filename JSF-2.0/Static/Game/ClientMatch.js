class ClientMatch{
  constructor(){
   this.socket = io.connect('http://localhost:8080');
   this.listen()
   this.emit('ClientMatchReady')
  }

  emit(route,msg){
    this.socket.emit(route,msg)
  }

  listen(){
    this.socket.on('Prova',(msg)=>{
      console.log(msg)
    })
  }
}
