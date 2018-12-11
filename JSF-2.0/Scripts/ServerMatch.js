class ServerMatch{

  constructor(){
    this.id = Math.random().toString(36).substr(2,9)
    this.playerList = []
    this.objectList = []

  }

  get_id(){
    return this.id
  }


}


module.exports = ServerMatch
