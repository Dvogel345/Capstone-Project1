
// Create drawing variables
let canvas;
let ctx;

// Create game loops
let gameloop;
let player;
let borders = [];

// Create Input Variables
let rightKey;
let leftKey;

// Runs once page loads
window.onload = function(){
    //Assigns canvas and context variables
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d")

    // Steup key listeners
    setupInputs();

    // Create Player
    // (x / y coords)
    player = new Player(60, 420)

    // Create Borders
    for (let i = 0; i < 1; i++) {
        borders.push(new Border(30, 470, 800, 30, 1))
    }
    borders.push(new Border(0, 0, 30, 800, 2));
    for (let i = 0; i < 1; i++){
        borders.push(new Border(770, 0,  30, 500, 2))
    }
    borders.push(new Border(100, 320, 600, 30, 1));
    borders.push(new Border(100, 150, 600, 30, 1));


    
    // Start game loop
    gameLoop = setInterval(step, 1000/30);

}

function step() {
    // step player
    player.step();

    // Draw everything
    draw();
}

function draw() {
    // Clear canvas
    ctx.fillStyle = "grey";
    ctx.fillRect(0, 0, 800, 500);

    // Draw the player
    player.draw();

    //Draw the borders
    for (let i = 0; i < borders.length; i++){
        borders[i].draw();
    }

}

function setupInputs() {
    document.addEventListener("keydown", function(event) {
        if (event.key === "ArrowRight") {
            // console.log("right");
            rightKey = true;
        } else if (event.key === "ArrowLeft") {
            // console.log("left");
            leftKey = true;
        }
    });

    document.addEventListener("keyup", function(event) {
        if (event.key === "ArrowRight") {
            // console.log("right");
            rightKey = false;
        } else if (event.key === "ArrowLeft") {
            // console.log("left");
            leftKey = false;
        }
    });
}
