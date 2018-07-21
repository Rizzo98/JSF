const express = require('express')
const app = express()
const server = app.listen(8080)
const io = require('socket.io')(server)
const path = require("path")
const match = require('./Scripts/ServerMatch.js')
const sql = require('node-sql-db')
const DB_connector = require('./Scripts/DB_connector.js')
const socket = require(path.join(__dirname+'/Scripts/SocketIO.js'))(io,match,DB_connector)
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

DB_connector.createDB(sql)

app.use('/static', express.static(__dirname + '/Static'));


app.get('/', (req, res) => res.sendFile(path.join(__dirname+'/Pages/Login.html')))

app.post('/login',(req,res)=>{
  DB_connector.get_user(req.body.usr,(usr)=>{
    if(usr.lenght>0){

      hashed = usr[0].pwd
      plain_text = req.body.pwd
      bcrypt.compare(plain_text, hashed, (err, res)=> {
        if(res){
          //login
        }
      })
    }

  })

})

app.get('/match/:id/:playerId',(req, res)=>{
  id = req.params.id
  playerId = req.params.playerId

  //TODO check se esiste il match a questo id

  res.sendFile(path.join(__dirname+'/Pages/Match_Instance.html'))
})
