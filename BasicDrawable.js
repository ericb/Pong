var BasicDrawable = Koi.define({
	ctx: 	   null,
	canvas:    false,
	name:      null,
	isStatic:  false,
	isDrawn:   false,
  
	init: function(options) {
		options       = options 	  || {};

		if(!options.ctx){
		  var defaultCanvas  = document.getElementsByTagName('canvas')[0];
		  var defaultContext = defaultCanvas.getContext('2d');
		}

		this.canvas   = options.canvas  || defaultCanvas;
		this.ctx      = options.ctx     || defaultContext;
		this.name     = options.name    || 'Unnamed Drawable';
		this.isStatic = options.isStatic  || false;
		this.isDrawn  = options.isDrawn   || false;
	},

	draw: function(){
		if(!this.isStatic || !this.isDrawn){
			var c = this.ctx;
			c.save();
			c.font = '12px';
			c.fillText(this.name, 0, 12);
			c.restore();
			this.isDrawn = true;
		}
	},
	
	clear: function(){
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
		this.isDrawn = false;
	}
});
