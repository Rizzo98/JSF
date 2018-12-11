class ClientMatch{
  constructor(){
   this.socket = io.connect('http://localhost:8080');
   this.listen()
  }

  emit(route,msg){
    this.socket.emit(route,msg)
  }

  listen(){
    this.socket.on('prova2',(msg)=>console.log(msg))
  }
}
