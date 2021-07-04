# kamikaze-racing

Kamikaze-Racing is a game where the player has to move his vehicle horizontally and avoid crashing with the objects that are vertically coming to him. The game has no winning, the player will be able to play until he/she looses. 

The score will be based on the amount of seconds the player managed to drive without crashing.

MVP (DOM - CANVAS)
-The game has a vehicle that moves horizontally.
-Obstacles appear randomly and approach the vehicle.
-The moment the vehicle collides with any obstacle, gameover.
-The game starts going faster everytime.

main.js

-splashScreen(){}
-gameScreen(){}
-gameOverScreen(){}

game.js

-class Game () {this.x; this.y; this.width; this.height;}
-gameLoop () {}
-addingObstacles() {}
-clearCanvas() {}
-drawCanvas(){}
-checkIfGameOver() {}

vehicle.js
-class Vehicle() { this.x; this.y; this.width; this.height; this.image;}
-drawVehicle(){}
-moveHorizontally() {}
-checkCollisions() {}

obstacles.js
-class Obstacle () {this.x; this.y; this.width; this.height; this.image}
-drawObstacle(){}

