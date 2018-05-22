const io = require('socket.io-client');
const socket = io('http://localhost:3000');
const fs = require('fs')

f = fs.readFileSync('./prova','utf8')

socket.emit('getData',{'data':f,'name':'UtenteA'})
socket.on('returnParsedData',(l)=>{
  window.location.href = "http://localhost:3000/" + l
})
