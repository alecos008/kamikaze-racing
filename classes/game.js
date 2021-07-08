class Game {
    constructor() {
        this.bg = new Image();
        this.bg.src = "../images/highway-background.png";
        this.vehicle = new Vehicle();
        this.obstacle = new Obstacle();

    }
    gameLoop = () => {
        
        //1. Clearing the canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        //2. Movements of elements
        this.obstacle.moveObstacle();
        //3. drawing elements
         ctx.drawImage(this.bg, 0, 0, canvas.width, canvas.height)

         this.vehicle.drawVehicle();
         
         this.obstacle.drawObstacle();
        //4. request animation
        requestAnimationFrame(this.gameLoop)
    }
}