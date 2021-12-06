// making coins which cross over the board from the right side

let timeToNextCoin = 0;
let coinIntervals = 750;
let lastTime = 0;
let coins = [];

class Coin {
    constructor(){
        this.width = 30;
        this.height = 30;
        this.x = Math.random() * (canvas.width - this.width);
        this.y = Math.random() * (canvas.height - this.height);
        this.directionX = Math.random() * 2 + 3;
        this.directionY = Math.random() * 2 - 2.5;
        }
    update(){
        this.x -= this.directionX;
    }
    draw(){
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

// Trying to understand game states and how to usue random generator on canvas

// let coins = {
//     coin: null,  // coin placeholder 
//     animationInterval: null,  // Interval to update animation

//     newXY() {
//         // Generate new random x, y place in gameBoard for sparkle
//         let xRand = Math.floor(Math.random() * gameBoard.size);
//         let yRand = Math.floor(Math.random() * gameBoard.size);
//         return {xRand, yRand};
//     },

//     newSparkle() {
//         // Grab spawn point
//         let [spawnX, spawnY] = gameBoard.spawnPoint;

//         // Make sure the spot isn't already taken on the board
//         let xRand, yRand;
//         do {
//             ({xRand, yRand} = this.newXY());
//         } while(
//             // Don't spawn on at the spawn point
//             (xRand === spawnX && yRand === spawnY)
//             // Don't spawn on a spot that already has sparkle or a tail element on it
//             || gameBoard.board[xRand][yRand] !== null);

//         // console.log(gameBoard.board[xRand][yRand])
//         // TODO: Also make sure it isn't where the cat is
//         // Note: Score is also how long the tail is

//         // Add to gameBoard ("true" means it's a sparkle element)
//         gameBoard.board[xRand][yRand] = true;

//         // Make coordinates and sparkle element
//         let x = gameBoard.spriteSize * xRand;
//         let y = gameBoard.spriteSize * yRand;
//         let element = new Element("div", {
//             // Attributes for accessibility
//             role: "image",
//             "aria-label": "sparkle",
//         }, x, y);
//         element.backgroundImage = "assets/sparkle/sparkle.png";

//         this.sprite = new AnimatedSprite(element.htmlElement);
//         this.sprite.sparkle();
//     },

//     // Remove sparkle HTML element if one exists at given coordinates
//     removeSparkle(x, y) {
//         let sparkleElement = document.querySelector(`#coord_${x}_${y}`);
//         if (sparkleElement) {
//             sparkleElement.remove();
//         }
//     },
// }

   