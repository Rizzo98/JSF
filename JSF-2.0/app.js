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

app.get('/loadCombatFile',(req, res) => res.sendFile(path.join(__dirname+'/Pages/Combat_File.html')))

app.get('/register', (req, res) => res.sendFile(path.join(__dirname+'/Pages/Register.html')))



app.post('/registered', (req, res) => {
  bcrypt.hash(req.body.pwd, 10, function(err, hash) {

    DB_connector.register_user(req.body.usr,hash,req.body.mail)
  })

})

app.post('/combatFile',(req, res)=>{
   console.log(req.body)
})

app.post('/login',(req,res)=>{
  DB_connector.get_user(req.body.usr,(usr)=>{

    if(usr.length>0){

      hashed = usr[0].pwd
      plain_text = req.body.pwd
      bcrypt.compare(plain_text, hashed, (err, res)=> {
        if(res){
          console.log('logged')

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
