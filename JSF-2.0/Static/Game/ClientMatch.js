class ClientMatch{
  constructor(){
   this.socket = io.connect('http://localhost:8080');
   this.listen()
   this.emit('ClientMatchReady')
   //this.emit(PlayerListChange,...)
   //this.emit(ObjectListChange,...)
  }

  emit(route,msg){
    this.socket.emit(route,msg)
  }

  listen(){
    this.socket.on('updatePlayerList',(msg)=>{
      console.log(msg)
    })

    this.socket.on('updateObjectList',(msg)=>{
      console.log(msg)
    })

  }
}
