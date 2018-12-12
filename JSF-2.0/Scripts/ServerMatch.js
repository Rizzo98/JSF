class ServerMatch{

  constructor(socket){
    this.id = Math.random().toString(36).substr(2,9)
    this.playerList = []
    this.objectList = []
    this.socket = socket
  }

  get_id(){
    return this.id
  }

  loadFunction(){
    this.socket.to(this.id).emit('Prova', 'the game will start soon');
    this.socket.on('Prova1',()=>console.log('ciao'))

  }

}


module.exports = ServerMatch
