class ServerMatch{

  constructor(){
    this.id = Math.random().toString(36).substr(2, 9);
    //parsare il testo
  }

  get_id(){
    return this.id
  }


}


module.exports = ServerMatch
