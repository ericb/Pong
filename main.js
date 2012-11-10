var Pong = Koi.define({
    canvas: null,    // the canvas element
    fps:    null,    // frames per second
    lastUpdate: null,  // last known fps
    timer:  null,    // the interval timer
    paused: false,   // whether or not the game is paused
    paddles: {},     // whether or not the game is paused
    
    init: function() {
        this.fps        = 0;
        this.canvas  = document.getElementsByTagName('canvas')[0];
		this.ctx = this.canvas.getContext('2d');
				this.paddles = {
					'left'  : new Paddle({x: 25 , y:122, h: 45, w: 10, name: 'left' }),
					'right' : new Paddle({x: 465, y:122, h: 45, w: 10, name: 'right' }),
				}
				this.ball = new Ball({ x: 250, y: 150, r: 10, k: 1, f: 1});
				this.bx     = {};
        		this.bx.min = 0;
        		this.bx.max = this.canvas.width;

        		this.by     = {};
        		this.by.min = 0;
        		this.by.max = this.canvas.height;
        this.registerEvents();
        this.resume();
    },
    
    pause: function() {
        this.paused = true;
        window.clearInterval(this.timer);
    },
    
    resume: function() {
        this.paused = false;
        this.timer = window.setInterval(this.bind(this.gameLoop), 16);
    },
    
    bind: function(func) {
        var _this = this;
        return function() {
            return func.apply(_this, arguments);
        }
    },
    
    registerEvents: function() {
        var _this = this;
        document.onkeydown = this.bind(this.handleKeyboardEvent);
    },
    
    handleKeyboardEvent: function(e) {
        
        var preventDefault = function(e) {
            e.returnValue = false;
            e.cancelBubble = true;
            if(e.preventDefault) {
                e.preventDefault();
            }
            if(e.stopPropagation) {
                e.stopPropagation();
            }
            return false;
        }
        
        var prevent = false;
        
        switch(e.keyCode) {

            case 66: // b - random ball start
                this.ball.setPosition( this.bx.max / 2, this.by.max / 2 );
                this.ball.setSpeed( Math.random() * 10 - 5, Math.random() * 10 - 5);
                break;

            case 13: // enter key
                if(this.paused) { 
                    this.resume();
                } else {
                    this.pause();
                }
                prevent = true;
                break;
            
            case 38: // up key
            case 37: // left key
                this.paddles.left.setAccel(0, -5);
                prevent = true;
                break;
                
            case 40: // down key
            case 39: // right key
                this.paddles.left.setAccel(0, 5);
                prevent = true;
                break;
        }
        
        if(prevent) {
            preventDefault(e);
        }
        
    },
    
    draw_fps: function() {
        var update = new Date().getTime();
        var fps    = (1000 / (update - this.lastUpdate));
        this.fps  += (fps - this.fps) / 30;
        this.lastUpdate = new Date().getTime();
        this.ctx.font      = "bold 11px Verdana";
        this.ctx.fillStyle = "#90a5b8";
        var fps_width = this.ctx.measureText('FPS: ' + this.fps.toFixed(0));
        this.ctx.fillText("FPS: " + this.fps.toFixed(0), ((this.bx.max / 2) - (fps_width.width / 2)), 20 );
    },
    
    gameLoop: function() {
            this.ctx.clearRect(0,0, canvas.width, canvas.height);
			for(var i in this.paddles){
				this.paddles[i].draw();
			}
			this.ball.draw();
			this.draw_fps();
    }
});

window.onload = function() {
    window._pong = new Pong();
}
