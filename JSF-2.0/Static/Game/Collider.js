class Collider{
  constructor(gameInstance){
    this.game = gameInstance
  }

  update(){
    var l = this.game.getList()


    var old1,old2
    for(var x in l){
      for(var y in l){

        if(x!=y){
            if(!l[x].update && !l[y].update){

              if(Math.abs(l[x].obj.graphic.getBounds().x-l[y].obj.graphic.getBounds().x) < l[x].obj.graphic.getBounds().width && Math.abs(l[x].obj.graphic.getBounds().y-l[y].obj.graphic.getBounds().y) < l[x].obj.graphic.getBounds().height){
                if(this.collision(l[x].obj.get_polygon(),l[y].obj.get_polygon()) ){

                  old1 = l[x].obj.get_strength()
                  old2 = l[y].obj.get_strength()
                  l[x].update=true
                  l[x].obj.on_Collision(old2)

                  l[y].update=true
                  l[y].obj.on_Collision(old1)



                }
              }

            }

        }

      }
    }

    for(x in l){
      l[x].update = false
    }

  }

  collision(a,b){
    var response = new SAT.Response();
    var collided = SAT.testPolygonPolygon(a, b, response)
    return collided
  }

}
