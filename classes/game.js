class Game {
    constructor() {
        this.bg = new Image();
        this.bg.src = "../images/highway-background.png";
        this.vehicle = new Vehicle();
        this.obstaclesArr = [];
        this.obstaclesArrPos = [0, 80, 160, 240, 320, 400, 480, 560, 640, 720];

    }
    generateObstacles = () => {
        
        if (this.obstaclesArr.length === 0 || this.obstaclesArr[this.obstaclesArr.length-1].y === canvas.height / 10){
            let randIndex = Math.floor(Math.random() * this.obstaclesArrPos.length);
            
            let obstacle = new Obstacle(this.obstaclesArrPos[randIndex]);
    
            this.obstaclesArr.push(obstacle);
        }
        
    }

    gameLoop = () => {
        
        //1. Clearing the canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        //2. Movements of elements
       this.generateObstacles()

       this.obstaclesArr.forEach(eachObs => {
           eachObs.moveObstacle();
       })

        //3. drawing elements
         ctx.drawImage(this.bg, 0, 0, canvas.width, canvas.height)

         this.vehicle.drawVehicle();
         
        this.obstaclesArr.forEach(eachObs => {
            eachObs.drawObstacle();
        })
        //4. request animation
        requestAnimationFrame(this.gameLoop)
    }
}