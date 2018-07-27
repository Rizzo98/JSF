class Match{

  constructor(SAT){
    this.list = [
      {'name':'x',"params":[30,0,10],"type":"Shield",'methods':[{"method":"rotate","params":"CLOCKWISE"}],'events':{"eventIn":{"type":"keyPress","key":"c"},"eventOut":{"type":"keyPress","key":"d"}}},
      {'name':'y',"params":[150,120,230],"type":"Shield",'methods':[{"method":"rotate","params":"COUNTERCLOCKWISE"}],'events':{"eventIn":{"type":"keyPress","key":"c"},"eventOut":{"type":"keyPress","key":"d"}}}
    ]

    this.game = new Game(SAT,800, 600, Phaser.CANVAS, 'phaser')
    this.game.state.add('default',{
      preload : this.preload,
      create : this.create,
      update : this.update,
      render : this.render
    },true)

    this.game.customList = this.list

  }

  preload(){
    var m = new Map(this.game)
    m.preload()
  }

  create(){
    this.game.time.advancedTiming = true
    this.coll = new Collider(this.game)
    this.mak = new Maker(this.game.customList,this.game)
  }


  update(){
    this.coll.update()
    this.mak.update()
  }

  render(){
    this.game.debug.text('render FPS: ' + (this.game.time.fps || '--') , 2, 14, "#00ff00");
  }

}
