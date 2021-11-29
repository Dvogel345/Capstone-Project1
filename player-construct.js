
// Create drawing variables
let canvas;
let ctx;

// Create game loops
let gameloop;
let player;

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

    // Create player
    // (x / y coords)
    player = new Player(400, 400)
    
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
