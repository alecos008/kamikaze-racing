let canvas = document.querySelector('#my-canvas');
let ctx = canvas.getContext('2d');

//DOM elements
let splashScreen = document.querySelector('#splash-screen');
let gameoverScreen = document.querySelector('#gameover-screen');
let startButton = document.querySelector('#start-btn');
let restartButton = document.querySelector('#restart-btn');

//game variable
let gameObj;

//Add event listeners
startButton.addEventListener('click', ()=> {
    //Displaying canvas once game starts
    canvas.style.display = "block";

    //hiding splashScreen once game starts
    splashScreen.style.display = "none";

    gameObj = new Game();
    gameObj.gameLoop();
})

window.addEventListener("keydown", (event) => {
    if (event.code === "ArrowLeft") {
        gameObj.vehicle.moveVehicleLeft();
    } else if (event.code === "ArrowRight") {
        gameObj.vehicle.moveVehicleRight();
    } else if (event.code === "ArrowDown") {
        gameObj.vehicle.moveVehicleDown();
    } else if (event.code === "ArrowUp") {
        gameObj.vehicle.moveVehicleUp();
    }
})