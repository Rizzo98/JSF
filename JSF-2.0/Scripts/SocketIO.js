module.exports = function(io,match,DB_connector){
  io.on('connection', (socket)=>{
    console.log('a user connected');

    socket.on('New_Match_request', (params)=>{
      m = new match()
      DB_connector.create_match(m.get_id(),params.type)
      socket.emit('New_Match_response',m.get_id())
    });

  });


}
