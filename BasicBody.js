var BasicBody = Koi.define({
	ctx: 	   null,
	canvas:    null,
	name:      null,
	h:  null, // dimentions
	w:  null,
	r:  null, // radius
	x:  null, // position
	y:  null,
	vx: null, // velocity
	vy: null,
	ax: null, // acceleration
	ay: null,
	k:  null, // dampening
	f:  null, // friction
  
	init: function(options) {
		options       = options 	  || {};

		if(!options.ctx){
		  var defaultCanvas  = document.getElementsByTagName('canvas')[0];
		  var defaultContext = defaultCanvas.getContext('2d');
		}

		this.canvas = options.canvas  || defaultCanvas;
		this.ctx    = options.ctx     || defaultContext;
		this.name   = options.name    || 'Unnamed Drawable';
		this.h  	= options.h  || 0;
		this.w  	= options.w  || 0;
		this.y  	= options.y  || 0;
		this.ay 	= options.ay || 0;
		this.vy 	= options.vy || 0;
		this.x  	= options.x  || 0;
		this.ax 	= options.ax || 0;
		this.vx 	= options.vx || 0;
		this.k  	= options.k  || .93;
		this.f  	= options.f  || .6;
	},

	setAccel: function(ax, ay){
		this.ax = ax;
		this.ay = ay;
	},

	setSpeed: function(vx, vy){
		this.vx = vx;
		this.vy = vy;
	},

	setPosition: function(x, y){
		this.x = x;
		this.y = y;
	},

	move: function(){
		this.ax *= this.k;
		this.ay *= this.k;
		this.vx += this.ax;
		this.vy += this.ay;
		this.vx *= this.f;
		this.vy *= this.f;
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
	}
});
