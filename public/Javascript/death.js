// player 1
    // if your px is grounded 
    // or in air
        // 

let death = {
    youDied() {
        // Add death information 
        if (document.querySelector("#death") === null) {
            let death = document.createElement("p");
            death.innerText = "You died";
            death.setAttribute("id", "death");
            document.querySelector("canvas").append(death);
        }
    }
}