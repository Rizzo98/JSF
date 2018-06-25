module.exports = function(io,r){
  io.on('connection', (socket)=>{
    console.log('a user connected');

    socket.on('New_Match', (text)=>{
      //parsing text

      //m = new Match()
      //console.log(m)
    });

  });


}
