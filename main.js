var Pong = Koi.define({
    canvas: null,  // the canvas element
    timer:  null,  // the interval timer
    paused: false, // whether or not the game is paused
    paddles: {},   // whether or not the game is paused
    
    init: function() {
        this.canvas  = document.getElementsByTagName('canvas')[0];
		this.ctx = this.canvas.getContext('2d');
				this.paddles = {
					'left'  : new Paddle({x: 25 , y:122, h: 45, w: 10, name: 'left' }),
					'right' : new Paddle({x: 475, y:122, h: 45, w: 10, name: 'right' }),
				}
				this.paddles['left'].draw();
				this.paddles['right'].draw();
        this.registerEvents();
        this.resume();
    },
    
    pause: function() {
        this.paused = true;
        window.clearInterval(this.timer);
    },
    
    resume: function() {
        this.paused = false;
        this.timer = window.setInterval(this.bind(this.gameLoop), 30);
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
    
    gameLoop: function() {
            this.ctx.clearRect(0,0, canvas.width, canvas.height);
			for(var i in this.paddles){
				this.paddles[i].draw();
			}
			//console.log('game timer', this.paddles.left.x);
    }
});

window.onload = function() {
    window._pong = new Pong();
}
