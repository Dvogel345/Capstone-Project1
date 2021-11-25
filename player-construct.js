// Case 1 - Trying out different ways to setup and move character
    // Loading content on load of the page
document.addEventListener("DOMContentLoaded", domloaded, false);
function domloaded(){   
   // The attributes of the player.
    let player = {
        x: 250,
        y: 440,
        // horizontal velocity
        x_v: 0,
        // vertical velocity
        y_v: 0,
        height: 20,
        width: 20
        };

    // The status of the arrow keys
    let keys = {
        right: false,
        left: false,
        stop: false,
        };

    // Friction to show realistic movements
    let friction = 0.7;

    // The number of platforms
    let num = 2;

    // The platforms
    let platforms = [];

    // Function to render the canvas
    function renderCanvas(){
        ctx.fillStyle = "#0F3F1B";
        ctx.fillRect(0, 0, 500, 500);
    }

    // Function to render the player
    function renderPlayer(){
        ctx.fillStyle = "#0FF8FB";
        ctx.fillRect((player.x)-20, (player.y)-8, player.width, player.height);
        }
    
        // Function to create platforms
    function createPlatform(){
        for(i = 0; i < num; i++) {
            platforms.push(
                {
                x: 200 * i,
                y: 450 + (30 * i),
                width: 500,
                height: 15
                }
            );
        }
        }
    
        // Function to render platforms
    function renderPlatform(){
        ctx.fillStyle = "#45597E";
        ctx.fillRect(platforms[0].x, platforms[0].y, platforms[0].width, platforms[0].height);
    
    }

        // This function will be called when a key on the keyboard is pressed
    function keydown(e) {
        
        // 37 is the code for the left arrow key
        if(e.keyCode == 37) {
            keys.left = true;
        }

        // // 40 is the code for the down arrow key
        // if(e.keyCode == 40) {
        //     keys.stop = true;
        // }

        // 39 is the code for the right arrow key
        if(e.keyCode == 39) {
            keys.right = true;
        }
    }

    // This function is called when the pressed key is released
    function keyup(e) {
        if(e.keyCode == 37) {
            keys.left = false;
            x_v = 0.0;
        }
        
        // if(e.keyCode == 40) {
        //    keys.stop = false; 
        // }

        if(e.keyCode == 39) {
            keys.right = false;
            x_v = 0.0;
        }
    }

    function loop() {

        // If the left key is pressed increase the relevant horizontal velocity
        if(keys.left) {
            player.x_v = -1.5;
        }
        
        if(keys.right) {
            player.x_v = 1.5;
        }
    
        // Updating the y and x coordinates of the player
        player.x += player.x_v;

        // A simple code that checks for collions with the platform
        let i = -1;
        if(platforms[0].x < player.x && player.x < platforms[0].x + platforms[0].width &&
        platforms[0].y < player.y && player.y < platforms[0].y + platforms[0].height){
            i = 0;
        }
        
        // Rendering the canvas, the player and the platforms
        renderCanvas();
        renderPlayer();
        renderPlatform();
    }

    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    ctx.canvas.height = 500;
    ctx.canvas.width = 500;
    createPlatform();

    // Adding the event listeners
    document.addEventListener("keydown", keydown);
    document.addEventListener("keyup", keyup);
    setInterval(loop, 22);
}