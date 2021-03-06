var methodsFunction = { 
addR:(sprite,params)=>{
    console.log('metodo addR  ||  ' + sprite + '  ||  ' + params)
  },
addSize:(sprite,params)=>{
    console.log('metodo addSize')
  },
addStroke:(sprite,params)=>{
    console.log('metodo addStroke')
    sprite.x +=10
  },
}
var methods = [
  {
    "name":"addStroke",
    "paramsType" : ["number"]
  },
  {
    "name":"addR",
    "paramsType" : ["number"]
  },
  {
    "name":"addSize",
    "paramsType" : ["number"]
  }
]

var list = [{"x":[{"params":[20,0,30],"type":"energy"},{"method":"addStroke","params":"ciaone"},{"method":"addR","params":34},{"eventIn":{"type":"keyPress","key":"c"},"eventOut":{"type":"keyPress","key":"d"}}]}]
var pgPosition = {'x':0,'y':0}

var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { create: create, update: update })
var pg
var pile = []

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
  loop()
}

function addInGameVar(){
  list.forEach((el)=>{
    el[Object.keys(el)[0]].push({'inGame':false})
    el[Object.keys(el)[0]].push({'spriteIndex':-1,'counter':-1})

  })
}


function loop(){
  list.forEach((el)=>{
    if(el[Object.keys(el)[0]][(el[Object.keys(el)[0]].length)-2].inGame){

       gameDet = el[Object.keys(el)[0]][(el[Object.keys(el)[0]].length)-1]
       if(gameDet.counter==-1){
         console.log(pile[gameDet.spriteIndex])
         game.add.existing(pile[gameDet.spriteIndex])
         el[Object.keys(el)[0]][(el[Object.keys(el)[0]].length)-1].counter++

       }else{
         if(gameDet.counter>el[Object.keys(el)[0]].length-5){
           el[Object.keys(el)[0]][(el[Object.keys(el)[0]].length)-1].counter = 0
         }

         method = el[Object.keys(el)[0]][gameDet.counter+1]
         execMethods(method,pile[gameDet.spriteIndex],el[Object.keys(el)[0]][0])
         el[Object.keys(el)[0]][(el[Object.keys(el)[0]].length)-1].counter++
       }

    }
  })
}


function execMethods(m,s,par){
  p = new Promise((resolve,reject)=>{
    mth = {}
    methods.forEach((el)=>{
      if(el.name==m.method){
        mth = el
      }
    })
    resolve(mth)
  })

  .then((mth)=>{

    methodsFunction[mth.name](s,par)
  })

}

function checkKey(key){
  list.forEach((el)=>{
    evIn = el[Object.keys(el)[0]][(el[Object.keys(el)[0]].length)-3].eventIn
    evOut = el[Object.keys(el)[0]][(el[Object.keys(el)[0]].length)-3].eventOut
    inGame = el[Object.keys(el)[0]][(el[Object.keys(el)[0]].length)-2].inGame
    if(evIn.key == key && inGame == false ){
      el[Object.keys(el)[0]][(el[Object.keys(el)[0]].length)-2].inGame = true
      params = el[Object.keys(el)[0]][0].params
      s = createArc(params[0],params[1],params[2])
      pile.push(s)
      evIn = el[Object.keys(el)[0]][(el[Object.keys(el)[0]].length)-1].spriteIndex = pile.length-1

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

  sprite = game.make.sprite(pgPosition.x, pgPosition.y, graphics.generateTexture())
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
