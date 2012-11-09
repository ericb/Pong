var Paddle = Koi.extend(BasicBody, {
	draw: function(){
	    if(this.x < this.bx.min) { this.x = this.bx.min; }
	    if(this.y < this.by.min) { this.y = this.by.min; }
	    if((this.x + this.h) > this.bx.max) { this.x = (this.bx.max - this.h); }
	    if((this.y + this.h) > this.by.max) { this.y = (this.by.max - this.h); }
		this.move();
		this.ctx.save();
		this.ctx.fillStyle = '#00e1ff';
		this.ctx.fillRect(this.x, this.y, this.w, this.h);
		this.ctx.restore();	
	}
});
