var Ball = Koi.extend(BasicBody, {
    radius: 7,
    k: 0,
    f: 0,
    
    move: function(){

		this.x  += this.ax;
		this.y  += this.ay;
	},
	
    flip_direction: function( side ) {
        switch(side) {
            case 'left':
                this.setAccel(-this.ax, this.ay);
                break;
                
            case 'right':
                this.setAccel(this.ax, -this.ay);
                break;
        }
    },
	
	collision: function( obj ) {
	    this.game.sounds.boing.play();
	    switch(obj.name) {
	        case 'left':
	        case 'right':
	            this.flip_direction('left');
	            break;
	    }
	},
	
	draw: function(){ 
	    if(this.x < this.bx.min) { this.x = this.bx.min; this.flip_direction('left'); }
	    if(this.y < this.by.min) { this.y = this.by.min; this.flip_direction('right'); }
	    if((this.x + this.w) > this.bx.max) { this.x = (this.bx.max - this.w); this.flip_direction('left'); }
	    if((this.y + this.h) > this.by.max) { this.y = (this.by.max - this.h); this.flip_direction('right'); }
		this.move();
		this.ctx.save();
		this.ctx.fillStyle = '#00e1ff';
		this.ctx.beginPath();
		this.ctx.arc(this.x, this.y, this.radius, 0, 360);
		this.ctx.fill();
		this.ctx.restore();	
	}
});
