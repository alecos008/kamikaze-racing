class Obstacle {
    constructor(xPos){
        this.x = xPos;
        this.y = 0;
        this.width = 80;
        this.height = 80;
        this.speed = 1;
        this.image = new Image();
        this.image.src = "../images/motorcycle-obstacle.jpg"
    }
    drawObstacle = () => {
        ctx.drawImage(this.image,this.x, this.y, this.width, this.height)
    }
    moveObstacle = () => {
        this.y += this.speed;
    }
}