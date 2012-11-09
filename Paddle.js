var Paddle = Koi.extend(BasicBody, {
	draw: function(){
		this.move();
		this.ctx.fillRect(this.x, this.y, this.w, this.h);
		console.log('calling!');		
	}
});
