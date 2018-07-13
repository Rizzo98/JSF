class ServerMatch{

  constructor(){
    this.id = Math.random().toString(36).substr(2, 9);
  }

  get_id(){
    return this.id
  }


}


module.exports = ServerMatch
