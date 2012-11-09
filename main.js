var Pong = Koi.define({
    canvas: null,  // the canvas element
    timer:  null,  // the interval timer
    paused: false, // whether or not the game is paused
    paddles: {},   // whether or not the game is paused
    
    init: function() {
				this.paddles = {
					'left'  : new Paddle({x: 25 , y:20, h: 75, w: 25, name: 'left' }),
					'right' : new Paddle({x: 250, y:20, h: 75, w: 25, name: 'right' }),
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
        this.timer = window.setInterval(this.gameLoop, 30);
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
        
        console.log(e.keyCode);
        switch(e.keyCode) {
            case 13: // enter key
                if(this.paused) { 
                    this.resume();
                } else {
                    this.pause();
                }
                break;
            
            case 37: // left key
                console.log('left');
                break;
                
            case 39: // right key
                console.log('right');
                break;
                
            default: 
                console.log(e.keyCode);
        }
        e.returnValue = false;
        e.cancelBubble = true;
        if(e.preventDefault) {
            e.preventDefault();
        }
        if(e.stopPropagation) {
            e.stopPropagation();
        }
        return false;
    },
    
    gameLoop: function() {
			for(var i in this.paddles){
				this.paddles[i].draw();
			}
			console.log('game timer');
    }
});

window.onload = function() {
    window._pong = new Pong();
}
