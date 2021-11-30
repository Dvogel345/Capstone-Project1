function Player(x, y){
    // Player variables
    this.x = x;
    this.y = y;
    // horizontal velocity
    this.xSpeed = 0;
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
                this.xSpeed *= this.friction;
            } else if (rightKey) {
                // Move right
                this.xSpeed ++;
            } else if (leftKey) {
                // Move left
                this.xSpeed --;
            }
            // Correct the Speed
            if (this.speed > this.maxSpeed) {
                this.xSpeed = this.maxSpeed;
            } else if (this.xSpeed < -this.maxSpeed) {
                this.xSpeed = -this.maxSpeed;
            }
            if (this.xSpeed > 0) {
                this.xSpeed = Math.floor(this.xSpeed);
            } else {
                this.xSpeed = Math.ceil(this.xSpeed);
            }

            // Horizontal Collision Rect
            let horizontalRectDetect = {
                x: this.x + this.xSpeed,
                y: this.y,
                width: this.width,
                height: this.height
            }

            // Vertical Collision Rect
            let verticalRectDetect = {
                x: this.x,
                y: this.y + this.xSpeed,
                width: this.width,
                height: this.height
            }

            // Check for intersections
            
           
        }
    }

    this.draw = function(){
        ctx.fillStyle = "blue";
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }

}