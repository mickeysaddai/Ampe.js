const Game = require('./scripts/game.js');

document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById('canvas'); //canvas setup
    ; //allow us to use built in canvas methods
    canvas.width = 500;
    canvas.height = 200;
    console.log('Ampe!!!')



    document.getElementsByClassName('dropdown')[0].addEventListener('click', () => {
        document.getElementById("myDropdown").classList.toggle("show");
    })



    document.getElementById('start-button').addEventListener('click', initGame)

})

function launchModal() {
    var modal = document.getElementById("myModal");

    // Get the button that opens the modal

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal 

    modal.style.display = "block";


    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
}

function initGame() {
    if (window.__gameOver) {
        return window.location.reload()
    }
    const ctx = canvas.getContext('2d')
    const numberOfPlayers = prompt('Please enter number between 2 - 8')
    const game = new Game(ctx, numberOfPlayers);
    game.drawGame();
    disabled = document.getElementById('start-button').disabled = true;




    // const chooseButton = document.createElement('button');
    // chooseButton.innerText = 'Choose Color';

    document.getElementsByClassName('dropdown')[0].style.visibility = 'visible'
    // document.getElementById('dropdown').append(chooseButton);

    const yellowButton = document.getElementsByClassName('redChoice')[0];

    yellowButton.addEventListener('click', () => {
        game.makeMove('red')
    })

    const blueButton = document.getElementsByClassName('blueChoice')[0];

    blueButton.addEventListener('click', () => {
        game.makeMove('blue')
    })
}

function createPlayer(xCoord = 100, yCoord = 75) { //for a single player
    // ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.strokeRect(0, 0, canvas.width, canvas.height)
    // ctx.fillRect(20, 200, 100, 100)

    ctx.beginPath();
    ctx.arc(xCoord, yCoord, 20, 0, 2 * Math.PI);
    ctx.stroke();

}

module.exports = {
    initGame: initGame
}