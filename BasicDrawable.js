var BasicBody = Koi.define({
	ctx: 	   null,
	canvas:    false,
	name:      null,
  
	init: function(options) {
		options       = options 	  || {};

		if(!options.ctx){
		  var defaultCanvas  = document.getElementsByTagName('canvas')[0];
		  var defaultContext = defaultCanvas.getContext('2d');
		}

		this.canvas   = options.canvas  || defaultCanvas;
		this.ctx      = options.ctx     || defaultContext;
		this.name     = options.name    || 'Unnamed Drawable';
	},

	draw: function(){
		var c = this.ctx;
		c.save();
		c.font = '12px';
		c.fillText(this.name, 0, 12);
		c.restore();
		this.isDrawn = true;
	}
});
