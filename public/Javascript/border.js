function Border (x, y, width, height, type) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    // type of border ie walls, ground
    this.type = type;

    this.draw = function() {
        if (this.type === "ground") {
            ctx.fillStyle = "green"
        } else if (this.type === "death") {
            ctx.fillStyle = "black"
        } else if (this.type === "end") {
            ctx.fillStyle = "gold"
        }
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}