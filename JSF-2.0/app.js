const express = require('express')
const app = express()
const server = app.listen(8080)
const io = require('socket.io')(server)
const path = require("path")
const match = require('./Scripts/ServerMatch.js')
const socket = require(path.join(__dirname+'/Scripts/SocketIO.js'))(io,match)
const sql = require('node-sql-db')
const DB_connector = require('./Scripts/DB_connector.js')(sql)

app.use('/static', express.static(__dirname + '/Static'));


app.get('/', (req, res) => res.sendFile(path.join(__dirname+'/Pages/New_Match.html')))

app.get('/match/:id/:playerId',(req, res)=>{
  id = req.params.id
  playerId = req.params.playerId

  //TODO check se esiste il match a questo id

  res.sendFile(path.join(__dirname+'/Pages/Match_Instance.html'))
})
