var list
var pgPosition = {'x':0,'y':0}

var socket = io.connect('http://localhost:3000');
socket.on('add',(l)=>{


  list = l
  var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { create: create, update: update })
  var pg

  document.addEventListener('keydown', (event) => {
    console.log(event.key)
    checkKey(event.key)
  });

  function create() {
    pg = createPlayer()
    addInGameVar()
  }

  function update(){
    pgMovement(pg,4)
    pgPosition.x = pg.world.x
    pgPosition.y = pg.world.y
  }

  function addInGameVar(){
    list.forEach((el)=>{
      el[Object.keys(el)[0]].push({'inGame':false})
    })
  }

  function checkKey(key){
    list.forEach((el)=>{
      evIn = el[Object.keys(el)[0]][(el[Object.keys(el)[0]].length)-2].eventIn
      evOut = el[Object.keys(el)[0]][(el[Object.keys(el)[0]].length)-2].eventOut
      inGame = el[Object.keys(el)[0]][(el[Object.keys(el)[0]].length)-1].inGame
      if(evIn.key == key && inGame == false ){
        el[Object.keys(el)[0]][(el[Object.keys(el)[0]].length)-1].inGame = true
        params = el[Object.keys(el)[0]][0].params
        s = createArc(params[0],params[1],params[2])
      }
      if(evOut.key == key && inGame){
        el[Object.keys(el)[0]][(el[Object.keys(el)[0]].length)-1].inGame = false
        console.log('rimosso')
      }

    })
  }


  function pgMovement(p,v){
    if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT))
     {
         p.x -= v;
     }
     else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT))
     {
         p.x += v;
     }

     if (game.input.keyboard.isDown(Phaser.Keyboard.UP))
     {
         p.y -= v;
     }
     else if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN))
     {
         p.y += v;
     }
  }

  function createArc(r,a,s){
    var sprite
    var graphics = game.add.graphics(game.world.centerX, game.world.centerY)

    graphics.lineStyle(8, 0xffd900)

    dimension = 1*Math.PI//(s*(2*Math.PI))/100
    angle = 0
    radius = 10*r+pg.width/2

    graphics.arc(0, 0, radius, 0, dimension, false)

    sprite = game.add.sprite(pgPosition.x, pgPosition.y, graphics.generateTexture())
    sprite.anchor.set(0.5)

    //posizionamento ad angle = 0
    aggiustamentoDimOverPI = 270-dimension*180/Math.PI<0 ? -270*Math.PI/180 : (((dimension*180/Math.PI-180)+Math.abs(dimension*180/Math.PI-180))/2)*Math.PI/180
    sprite.y -= radius*Math.sin(aggiustamentoDimOverPI)-sprite.height/2
    sprite.x += radius-sprite.width/2

    //gestione rotazione angle
    sprite.pivot.x = radius/2 -0.25*sprite.width

    sprite.angle=angle

    graphics.destroy()

    return sprite
  }

  function createPlayer(){
    var graphics = game.add.graphics(game.world.centerX, game.world.centerY)
    var s
    graphics.beginFill(0x162BC7)
    graphics.drawRect(50, 250, 100, 100)
    graphics.endFill()

    s = game.add.sprite(200, 300, graphics.generateTexture())
    s.anchor.set(0.5)
    graphics.destroy()

    return s
  }


})
