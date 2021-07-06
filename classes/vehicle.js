class Vehicle {
    constructor(){
        this.x = canvas.width / 2;
        this.y = canvas.height - 40;
        this.width = 40;
        this.height = 40;
        this.image = new Image();
        this.image.src = "../images/vehicle.png";

    }
    drawVehicle = () => {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
    }
    moveVehicleLeft = () => {
        this.x -= 40;
    }
    moveVehicleRight = () => {
        this.x += 40;
    }

}