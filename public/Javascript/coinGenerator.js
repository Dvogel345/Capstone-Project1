let timeToNextCoin = 0;
let coinIntervals = 750;
let lastTime = 0;
let coins = [];

class Coin {
    constructor(){
        this.width = 30;
        this.height = 30;
        this.x = Math.random() * (canvas.width - this.height);
        this.y = Math.random() * (canvas.height - this.height);
        this.directionX = Math.random() * 2 + 3;
        this.directionY = Math.random() * 2 - 2.5;
        }
    update(){
        this.x -= this.directionX;
    }
    draw(){
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

   