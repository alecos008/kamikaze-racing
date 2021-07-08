class Vehicle {
    constructor(){
        this.x = canvas.width / 2;
        this.y = canvas.height - 80;
        this.width = 80;
        this.height = 80;
        this.image = new Image();
        this.image.src = "../images/vehicle.png";

    }
    drawVehicle = () => {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
    }
    moveVehicleLeft = () => {
        if (this.x > 0){
            this.x -= 40;
        }
    }
    moveVehicleRight = () => {
        if (this.x < canvas.width - this.width) {

            this.x += 40;
        }
    }

}