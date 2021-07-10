class Vehicle {
    constructor(){
        this.width = 80;
        this.height = 80;
        this.x = canvas.width / 2;
        this.y = canvas.height - this.height;
        this.image = new Image();
        this.image.src = "../images/vehicle.png";

    }
    drawVehicle = () => {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
    }
    moveVehicleLeft = () => {
        if (this.x > 0){
            this.x -= 80;
        }
    }
    moveVehicleRight = () => {
        if (this.x < canvas.width - this.width) {

            this.x += 80;
        }
    }
    moveVehicleUp = () => {
        if (this.y > 0) {
            this.y -= 40;
        }
    }
    moveVehicleDown = () => {
        if (this.y < canvas.height - this.height) {
            this.y += 40;
        }
    }

    vehicleObstacleCollision = (obstacle) => {
        if (this.x < obstacle.x + obstacle.width &&
            this.x + this.width > obstacle.x &&
            this.y < obstacle.y + obstacle.height &&
            this.y + this.height > obstacle.y + 20) {
             return true;
         } 
    }

}