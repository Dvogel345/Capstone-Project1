// Variables for coin location
// const scale = 20;
// const rows = canvas.height / scale;
// const columns = canvas.width / scale;

// Coin generator
function Coin (x, y) {
    this.x = x;
    this.y = y;

    this.width = 20;
    this.height = 20;
    this.active = true;

    this.pickLocation = fucntion() {
        this.x = (Math.floor(Math.Random() * canvas.height + 1) );
        this.y = (Math.floor(Math.Random()));
    }

    this.drawCoin = function() {
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    this.clearCoin = function() {
        ctx.clearRect();
    }

    this.update = function() {
        this.Coin
    }
}