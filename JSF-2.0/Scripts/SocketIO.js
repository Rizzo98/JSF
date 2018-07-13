module.exports = function(io,match){
  io.on('connection', (socket)=>{
    console.log('a user connected');

    socket.on('New_Match_request', (text)=>{

      m = new match()
      socket.emit('New_Match_response',m.get_id())
      //TODO salvare il match da qualche parte in modo pubblico
    });

  });


}
