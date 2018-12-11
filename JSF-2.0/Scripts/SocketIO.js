module.exports = function(io,match,DB_connector){
  io.on('connection', (socket)=>{
    console.log('a user connected');

    socket.on('New_Match_request', (params)=>{
      m = new match()
      DB_connector.create_match(m.get_id(),params.type)
      socket.emit('New_Match_response',m.get_id())
    });

    socket.on('Choose_cb_request',(id)=>{
      DB_connector.get_combatFile(id,(data)=>{
        socket.emit('Choose_cb_response',data)
      })
    })

    socket.on('prova',(msg)=>{
      socket.emit('prova2','ciao2')
    })

  });


}
