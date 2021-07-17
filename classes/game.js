class Game {
    constructor() {
        this.bg = new Image();
        this.bg.src = "../images/highway-background.png";
        this.vehicle = new Vehicle();
        this.obstaclesArr = [];
        this.obstaclesArrPos = [0, 80, 160, 240, 320, 400, 480, 560, 640, 720];
        this.isGameRunning = true;
        this.timeInGame = 0;
        this.frames = 0;
        this.speedDifficulty = 2;
        this.audio = new Audio("../audio-files/race-cars-racing.mp3");
        this.collisionAudio = new Audio("../audio-files/mixkit-truck-crash-with-explosion-1616.wav");
    }
    generateObstacles = () => {
        
        if (this.obstaclesArr.length === 0 || this.obstaclesArr[this.obstaclesArr.length-1].y > 80){
            let randIndex = Math.floor(Math.random() * this.obstaclesArrPos.length);
            
            let obstacle = new Obstacle(this.obstaclesArrPos[randIndex], this.speedDifficulty);
            
            this.obstaclesArr.push(obstacle);
            
        }
    }
    gameOver = () => {
        this.obstaclesArr.forEach(eachObs => {
            if (this.vehicle.vehicleObstacleCollision(eachObs)) {
             //stoping game
             this.isGameRunning = false;

            //pausing bg audio
            this.audio.pause();

            //starting crash aduio
            this.collisionAudio.volume = 0.5;
            this.collisionAudio.play();

            //hidding the canvas
             canvas.style.display = "none";
    
             //displaying gameover screen
             gameoverScreen.style.display = "flex";
    
             // setting the local storage
             let maxScore = storage.getItem("storedScore"); // undefined

            //setting the local storage to time in game
            if (this.timeInGame > maxScore || maxScore === undefined) {
                storage.setItem("storedScore", this.timeInGame); // 2
                
                time1TableElement.innerHTML = this.timeInGame;
               
            } else {
                time1TableElement.innerHTML = maxScore;
            }
            
             console.dir(storage)
             
    
            }
        })
    }

    gameLoop = () => {

        

        
        //1. Clearing the canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height)

        //2. Movements of elements or any action
       this.generateObstacles();

       this.obstaclesArr.forEach(eachObs => {
           eachObs.moveObstacle();
       })


       this.frames++;
       if (this.frames % 60 === 0) {
           this.timeInGame++;
       }

       //Appending the seconds played
       scoreNum.innerHTML = this.timeInGame;
       

       //adding the player and seconds played to scoreboard
       user1TableElement.innerHTML = user1;
       //time1TableElement.innerHTML = `${this.timeInGame} secs`;

       //Increasing the speed every 10 seconds

       if (this.frames % 600 === 0) {
           this.speedDifficulty *= 1.15;
       }

       this.gameOver();

        //3. drawing elements
         ctx.drawImage(this.bg, 0, 0, canvas.width, canvas.height)

         this.vehicle.drawVehicle();
         
        this.obstaclesArr.forEach(eachObs => {
            eachObs.drawObstacle();
        })
        //4. request animation
        if (this.isGameRunning){
            requestAnimationFrame(this.gameLoop)

            //starting bg audio
            this.audio.volume = 0.2;
            this.audio.play();

            this.collisionAudio.pause();
        }
        
    }
}