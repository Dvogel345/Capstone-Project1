function Portal (x, y, width, height, type) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    // type of border ie walls, ground, doors
    this.type = type;


    this.draw = function() {
        if (this.type === 1) {
            ctx.fillStyle = "purple";
        } else if (this.type === 2) {
            ctx.fillStyle = "indigo"
        }
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

