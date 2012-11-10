var Paddle = Koi.extend(BasicBody, {
	draw: function(){
	    
	    if(this.x < this.bx.min) { this.x = this.bx.min; this.setAccel(0, 1); }
	    if(this.y < this.by.min) { this.y = this.by.min; this.setAccel(0, 1); }
	    if((this.x + this.w) > this.bx.max) { this.x = (this.bx.max - this.w); this.setAccel(0, -1); }
	    if((this.y + this.h) > this.by.max) { this.y = (this.by.max - this.h); this.setAccel(0, -1); }
		this.move();
		this.ctx.save();
		this.ctx.fillStyle = '#00e1ff';
		this.ctx.fillRect(this.x, this.y, this.w, this.h);
		this.ctx.restore();	
	}
});
