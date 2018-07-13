class Shield{
  constructor(startCoord,radius,startAngle,ampitude,gameInstance){
    var obj = CreateFigure.getArc(startCoord,radius,startAngle,ampitude)
    this.polygon = obj.polygon
    this.graphic = obj.graphic
    this.game = gameInstance
    this.velocity = 3
    this.strength = (ampitude+radius)
    this.id = game.addObject(this)
    console.log(this.id +' | ' + this.strength)
  }

  move(d=null){
    if(game.inGame(this.polygon)){
      switch (d) {
        case 'LEFT':
        this.graphic.x -= this.velocity
        this.polygon.pos.x -= this.velocity
        break;
        case 'RIGHT':
        this.graphic.x += this.velocity
        this.polygon.pos.x += this.velocity
        break;
        case 'UP':
        this.graphic.y -= this.velocity
        this.polygon.pos.y -= this.velocity
        break;
        case 'DOWN':
        this.graphic.y += this.velocity
        this.polygon.pos.y += this.velocity
        break;

        default:
        return null

      }

    }else{
      this.destroy()
    }
  }

  rotate(d = 'CLOCKWISE'){
    var a = 0.05
    if(d=='CLOCKWISE'){
      this.graphic.rotation += a
      this.polygon.rotate(a)
    }
    else if(d == 'COUNTERCLOCKWISE'){
      this.graphic.rotation -= a
      this.polygon.rotate(-a)
    }
    this.polygon.pos.x = this.graphic.x
    this.polygon.pos.y = this.graphic.y
  }

  add_radius(r){
    //TODO
  }

  add_stroke(s){
    //TODO
  }

  get_polygon(){
    return this.polygon
  }

  destroy(){
    this.graphic.destroy()
    game.removeObject(this.id)
  }

  get_strength(){
    return this.strength
  }

  get_id(){
    return this.id
  }

  on_Collision(stren){
    var death = false
    this.strength -= stren
    console.log([this.id,this.strength,stren])
    if(this.strength<=0)
      this.destroy()
  }

}
