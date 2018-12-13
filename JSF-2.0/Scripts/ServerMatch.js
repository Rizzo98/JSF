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

  welcome(){
    this.socket.to(this.id).emit('Prova', 'the game will start soon')
  }

  updatePlayerList(){
    this.socket.to(this.id).emit('updatePlayerList', this.playerList)
  }

  updateObjectList(){
    this.socket.to(this.id).emit('updateObjectList', this.objectList)
  }

}

module.exports = ServerMatch
