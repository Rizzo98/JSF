class CreateFigure{

	 static getArc(startCoord,radius,startAngle,ampitude){
		var V = SAT.Vector
		var P = SAT.Polygon
		var density = 20
		var r= radius
		var a = ampitude
		var s= startAngle
		var interval = a/density
		var vects = []


		//circonferenza esterna
		for(var i=0; i<=density;i++){
			vects.push(new V(Math.cos(game.math.degToRad(interval*i+s))*r, Math.sin(game.math.degToRad(interval*i+s))*r ))
		}


		//circonferenza interna
		var v2 = []
		r -= 10
		for(var i=density; i>=0 ;i--){
			v2.push(new V(Math.cos(game.math.degToRad(interval*i+s))*r, Math.sin(game.math.degToRad(interval*i+s))*r ))
		}
		r += 10

		var polygon = new P(new V(startCoord.x,startCoord.y),vects.concat(v2))

		var g = game.add.graphics(polygon.pos.x, polygon.pos.y);
		g.beginFill(Phaser.Color.getRandomColor(100, 200));
		g.drawPolygon(polygon.calcPoints);
		g.endFill();

		vects.push(new V(0,0))
		polygon = new P(new V(startCoord.x,startCoord.y),vects)
		g.alpha = 0.3
		g.beginFill(Phaser.Color.getRandomColor(100, 200));
		g.drawPolygon(polygon.calcPoints);
		g.endFill();

		return {'graphic' : g, 'polygon' : polygon}

	}

}

module.exports = CreateFigure
