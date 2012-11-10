var Ball = Koi.extend(BasicBody, {
    radius: 7,
    k: 0,
    f: 0,
    
    move: function(){

		this.x  += this.ax;
		this.y  += this.ay;
	},
	
	draw: function(){ 
	    if(this.x < this.bx.min) { this.x = this.bx.min; this.setAccel(-this.ax, this.ay); }
	    if(this.y < this.by.min) { this.y = this.by.min; this.setAccel(this.ax, -this.ay); }
	    if((this.x + this.w) > this.bx.max) { this.x = (this.bx.max - this.w); this.setAccel(-this.ax, this.ay); }
	    if((this.y + this.h) > this.by.max) { this.y = (this.by.max - this.h); this.setAccel(this.ax, -this.ay); }
		this.move();
		this.ctx.save();
		this.ctx.fillStyle = '#00e1ff';
		this.ctx.beginPath();
		this.ctx.arc(this.x, this.y, this.radius, 0, 360);
		this.ctx.fill();
		this.ctx.restore();	
	}
});
