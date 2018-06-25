const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const path = require("path");
var r = require('./Scripts/Game');
const socket = require(path.join(__dirname+'/Scripts/SocketIO.js'))(io,r)

console.log(r)

app.get('/', (req, res) => res.sendFile(path.join(__dirname+'/Pages/New_Match.html')))

server.listen(8080);
