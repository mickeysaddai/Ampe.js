// const Game = require('./scripts/game.js');


const canvas = document.getElementById('canvas'); //canvas setup
const ctx = canvas.getContext('2d'); //allow us to use built in canvas methods
canvas.width = 500;
canvas.height = 300;

document.addEventListener("DOMContentLoaded", () => {
    // const main = document.getElementById('main')
    console.log('Ampe!!!')

    document.getElementById('start-button').addEventListener('click', function(){
      console.log('clicked')
        const numberOfPlayers = prompt('Please enter your number of players')
        const game = new Game(ctx, numberOfPlayers);
        game.drawGame();
        // console.log('You entered ', numberOfPlayers)
        // setUpGameBoard(numberOfPlayers)
        disabled = document.getElementById('start-button').disabled = true;




        const chooseButton = document.createElement('button');
        chooseButton.innerText = 'Choose Color';
         document.getElementById('color-selector').append(chooseButton);

        chooseButton.addEventListener('click', function(){
            game.makeMove();
        })

    })
    
})




function setUpGameBoard(players = 1) {

    createPlayers(players, 75)
    createPlayers(players, 185)
}

function createPlayer(xCoord = 100, yCoord = 75){ //for a single player
    // ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.strokeRect(0, 0, canvas.width, canvas.height)
    // ctx.fillRect(20, 200, 100, 100)
    
    ctx.beginPath();
    ctx.arc(xCoord, yCoord, 20, 0, 2 * Math.PI);
    ctx.stroke();

    // requestAnimationFrame(animate)
}

function createPlayers(numberOfPlayers, yCoord) { //for multiple players
    let startingXCoord = 100
    const startingYCoord = yCoord || 75;

    for (let i = 0; i < numberOfPlayers; i++) {
        createPlayer(startingXCoord, startingYCoord);
        startingXCoord += 75;
    }
}







// let player = {
//     x: 300,
//     y: 300,
//     width: 20,
//     height: 20

//     // x_vel: 0,
//     // y_vel: 0

// }






// ctx.strokeRect(100, 100, 100, -100);
// ctx.fillStyle = 'rgb(200, 0, 0)';
// ctx.fillRect(10, 10, 50, 50);

// ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
// ctx.fillRect(30, 30, 50, 50);

// function draw() {
//     var canvas = document.getElementById('canvas');
//     if (canvas.getContext) {
//         var ctx = canvas.getContext('2d');

//         ctx.fillRect(25, 25, 100, 100);
//         ctx.clearRect(45, 45, 60, 60);
//         ctx.strokeRect(50, 50, 50, 50);
//     }
// }