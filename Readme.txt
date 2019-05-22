 THE RGB(R, G, B) COLOR GAME

The game can be played in two modes - easy and hard. You need to pick the tile with the displayed RGB value.


color.html file has the html content to be rendered

color.css has the styles for the Color Game page

The color.js file handles the functionaly of the two modes easy(3 tile) and hard(6 tile).

generateRandColors() takes in the number of tiles to be displayed depending on the mode and generates random colors.

pickColor() picks a random color and is stored in the variable pickedColor.

If the color clicked by user(clickedColor) is same as the pickedColor then the user wins the game and it resets to a new 
game if the usere chooses to Play Again.

changeColor() changes the color of all tiles to the RGB value if the user wins the game.