class Game extends Phaser.Game{
  constructor(SAT =null,width=800,height=600,renderer=Phaser.AUTO,parent='',state=null,transparent=false,antialias=true,phisicConfig=null){
    super(width,height,renderer,parent,state,transparent,antialias,phisicConfig)
    this.border = new SAT.Polygon(new SAT.Vector(0,0),[new SAT.Vector(width,0),new SAT.Vector(width,height),new SAT.Vector(0,height),new SAT.Vector(0,0) ])
    this.list = []
  }


  addObject(obj){
    var id = Math.random().toString(36).substr(2, 9);
    this.list.push({'id': id, 'obj':obj})
    return id
  }

  removeObject(id){
    this.list = this.list.filter((item)=> item.id !== id)
  }

  getList(){
    return this.list
  }

  allInGame(obj=null){
    var response = new SAT.Response();
    var e = SAT.testPolygonPolygon(obj, this.border, response)
    return response.aInB
  }

  inGame(obj=null){
    var response = new SAT.Response();
    var e = SAT.testPolygonPolygon(obj, this.border, response)
    var r = (Math.abs(response.overlapV.x) + Math.abs(response.overlapV.y))==0 ? false : true
    return r
  }

}

module.exports = Game
