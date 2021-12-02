
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
let upKey;
let downKey;

// Start the game 
// let startGame = function() {
// Runs once page loads
    window.onload = function(){
        //Assigns canvas and context variables
        canvas = document.getElementById("canvas");
        ctx = canvas.getContext("2d")

        // Steup key listeners
        setupInputs();

        // Create Player
        // (x / y coords)
        player = new Player(500, 400)
        // coin = new Coin(30, 30);
        
        coin.pickLocation();
        console.log(coin)

        // Create Borders
        // ground
        borders.push(new Border(30, 470, 800, 30, "ground"));
        // walls Red = Dead
        borders.push(new Border(0, 0, 30, 800, "death"));
        borders.push(new Border(770, 0,  30, 500, "death"));
        // blocks
        borders.push(new Border(100, 390, 80, 80, "ground"));
        borders.push(new Border(250, 290, 80, 80, "ground"));
        borders.push(new Border(400, 290, 80, 80, "ground"));
        borders.push(new Border(550, 190, 80, 80, "ground"));
        // top platform
        borders.push(new Border(100, 150, 350, 30, "ground"));

        // ceiling Red = Dead
        // borders.push(new Border(30, 0, 740, 30, "death"));

        // End game
        // borders.push(new Border(135, 360, 10, 10, "end"));
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
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, 800, 500);

        // Draw the player
        player.draw();

        // draw the coins
        // coin.draw();
        //Draw the borders
        // Using a for loop allows to go through the array of dimensions
        for (let i = 0; i < borders.length; i++){
            borders[i].draw();
        }
        // borders.draw();

    }

    function setupInputs() {
        document.addEventListener("keydown", function(event) {
            if (event.key === "ArrowRight" || event.key === "d") {
                // console.log("right");
                rightKey = true;
            } else if (event.key === "ArrowLeft" || event.key === "a") {
                // console.log("left");
                leftKey = true;
            } else if (event.key === "ArrowDown" || event.key === "s") {
                // console.log("down");
                downKey = true;
            } else if (event.key === "ArrowUp" || event.key === "w") {
                // console.log("up");
                upKey = true;
            }
        });

        document.addEventListener("keyup", function(event) {
            if (event.key === "ArrowRight" || event.key === "d") {
                // console.log("right");
                rightKey = false;
            } else if (event.key === "ArrowLeft" || event.key === "a") {
                // console.log("left");
                leftKey = false;
            } else if (event.key === "ArrowDown" || event.key === "s") {
                console.log("down");
                downKey = false;
            } else if (event.key === "ArrowUp" || event.key === "w") {
                console.log("up");
                upKey = false;
            }
        });
    }

    function checkIntersection(r1, r2) {
        if (r1.x >= r2.x + r2.width) {
            return false;
        } else if (r1.x + r1.width <= r2.x) {
            return false;
        } else if (r1.y >= r2.y + r2.height) {
            return false;
        } else if (r1.y + r1.height <= r2.y) {
            return false;
        } else {
            return true;
        }
    }
// }