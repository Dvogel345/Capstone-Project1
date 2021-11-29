function Player(x, y){
    // Player variables
    this.x = x;
    this.y = y;
    // horizontal velocity
    this.xspeed = 0;
    // what causes the player to slow down
    this.friction = 0.6;
    // speed at which the player moves
    this.maxSpeed = 10;
    this.width = 20;
    this.height = 50;
    this.active = true;

    this.step = function() {
        // Movement
        if (this.active) {
            // Horizontal Movement
            if (!leftKey && !rightKey || leftKey && rightKey){
                // Slow down
                this.xspeed *= this.friction;
            } else if (rightKey) {
                // Move right
                this.xspeed ++;
            } else if (leftKey) {
                // Move left
                this.xspeed --;
            }
            // Correct the Speed
            if (this.speed > this.maxSpeed) {
                this.xspeed = this.maxSpeed;
            } else if (this.xspeed < -this.maxSpeed) {
                this.xspeed = -this.maxSpeed;
            }

            this.x += this.xspeed;
        }
    }

    this.draw = function(){
        ctx.fillStyle = "blue";
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }

}