var Paddle = Koi.extend(BasicBody, {
	draw: function(){
		this.move();
		this.ctx.save();
		this.ctx.fillStyle = 'black';
		this.ctx.fillRect(this.x, this.y, this.w, this.h);
		this.ctx.restore();	
	}
});
