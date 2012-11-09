var BasicBody = Koi.define({
	ctx: 	   null,
	canvas:    false,
	name:      null,
	x:  0, // position
	y:  0,
	vx: 0, // velocity
	vy: 0,
	ax: 0, // acceleration
	ay: 0,
	k:  1, // dampening
  
	init: function(options) {
		options       = options 	  || {};

		if(!options.ctx){
		  var defaultCanvas  = document.getElementsByTagName('canvas')[0];
		  var defaultContext = defaultCanvas.getContext('2d');
		}

		this.canvas   = options.canvas  || defaultCanvas;
		this.ctx      = options.ctx     || defaultContext;
		this.name     = options.name    || 'Unnamed Drawable';
		this.y = options.y   || 0;
		this.ay = options.ay || 0;
		this.vy = options.vy || 0;
	},

	setAccel: function(ax, ay){
		this.ax = ax;
		this.ay = ay;
	},

	setSpeed: function(vx, vy){
		this.vx = vx;
		this.vy = vy;
	},

	move: function(){
		this.ax *= this.damp;
		this.ay *= this.damp;
		this.vx += this.ax;
		this.vy += this.ay;
		this.x  += this.vx;
		this.y  += this.vy;
	},

	draw: function(){
		this.move();
		var c = this.ctx;
		// canvas hates floats
		var x = parseInt(this.x, 10);
		var y = parseInt(this.y, 10);
		c.save();
		c.font = '12px';
		c.fillText(this.name, x, y + 12);
		c.restore();
		this.isDrawn = true;
	}
});
