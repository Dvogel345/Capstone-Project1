# Capstone-Project1
Making a browser game

**Jen** & **Who ever reads this code**: This code is organized in this way because netlify didn't like my organization prior; 
so having everything in folders besides html is what allows netlify to function.

                    Game Requirements

This game can be designed for 2 or more players (PvP) or 1 player (PvE)

The second player in a PvP game can be a person or an AI

For multi-player games, turns should switch appropriately between players

This game should be winnable or it should keep score (whichever makes more sense)

When a player wins or loses, the game status and/or score should display visually to the player in a 
way that does not rely on console.logs or alerts

If there is a valid draw (tie) condition in your chosen game, that should be implemented

HTML, CSS, and JavaScript should live in separate files

Effort must be spent on styling and appearance

The HTML code should use sematic tags

The game should have a Readme.md file in the Github repository that describes the inspiration for the 
game, explains the controls and how to play the game, lists the technologies used to build the game, and addresses any outstanding bugs or unfinished functionality

                    Bonus Ideas

Make persistent scores in your browser's localStorage

Add interesting music or sound effects to your game

                (Approved) 3rd party tools



                            Markup

HTML:   Title:          Holding the objective of the game
        Scoreboard:     Player 1 with score 
        Scoreboard:     Player 1 with score

CSS:    Title styling:  


JS:     End Game State
            Find the end portal (its orange in the drawio)
            
            Should there be a key to unlock End Portal?
        
        Controls
            left
            right
            interact
        
        Collision Detection
            When player object passes by portal object
                transverse player at 2 frames p/s through to the pair portal
            Test Portals
                Portal 1 === 10
            When player passes by points object, add points to scoreboard, under player-score
            
            When player object passes by End Game portal, game ends    
                


