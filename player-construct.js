   
document.addEventListener("DOMContentLoaded", domloaded, false);
function domloaded(){   
   // The attributes of the player.
    let player = {
        x: 200,
        y: 440,
        x_v: 0,
        y_v: 0,
        height: 20,
        width: 20
        };

    // The status of the arrow keys
    let keys = {
        right: false,
        left: false,
        jump: false,
        };

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
                y: 450 ,
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
    
        // 39 is the code for the right arrow key
        if(e.keyCode == 39) {
            keys.right = true;
        }
    }
    
    // This function is called when the pressed key is released
    function keyup(e) {
        if(e.keyCode == 37) {
            keys.left = false;
        }

        if(e.keyCode == 39) {
            keys.right = false;
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
        player.y += player.y_v;
        player.x += player.x_v;

        // A simple code that checks for collions with the platform
        let i = -1;
        if(platforms[0].x < player.x && player.x < platforms[0].x + platforms[0].width &&
        platforms[0].y < player.y && player.y < platforms[0].y + platforms[0].height){
            i = 0;
        }
        
        if(platforms[1].x < player.x && player.x < platforms[1].x + platforms[1].width &&
        platforms[1].y < player.y && player.y < platforms[1].y + platforms[1].height){
            i = 1;
        }

        // if(platforms[2].x < player.x && player.x < platforms[2].x + platforms[2].width &&
        // platforms[2].y < player.y && player.y < platforms[2].y + platforms[2].height){
        //     i = 2;
        // }

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