const Game = require('./scripts/game.js');

document.addEventListener("DOMContentLoaded", () => {
    launchModal()
    const canvas = document.getElementById('canvas'); //canvas setup
    canvas.width = 700;
    canvas.height = 200;
    console.log('Ampe!!!')

    
    document.getElementsByClassName('dropdown')[0].addEventListener('click', () => {
        document.getElementById("myDropdown").classList.toggle("show");
    })

    document.getElementById('start-button').addEventListener('click', initGame)

})


function launchModal() {
    const modal = document.getElementById("myModal");

    // Get the button that opens the modal

    // Get the <span> element that closes the modal
    const span = document.getElementsByClassName("close")[0];
    const beginButton = document.getElementById('beginButton');
    beginButton.disabled = true;

    // When the user clicks the button, open the modal 

    modal.style.display = "block";


    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }
    const contestantInput = document.getElementById('contestantInput');
    contestantInput.addEventListener('keydown', (event) => {
        const value = event.target.value;
        if (value > 0 || value < 8) {
            contestantInput.value = value
            console.log('enabled button')
            beginButton.disabled = false

        } else {
            beginButton.disabled = true
            console.log('diasbled button')

        }
    })

    beginButton.addEventListener('click', () => {
        modal.style.display = "none";
        initGame(contestantInput.value)
    })
}


function muteOrUnmute() {
    const ampeSong = document.getElementById("ampeSong");
    const muteButton = document.getElementById('mute');

    if (ampeSong.muted) {
        ampeSong.muted = false;
        muteButton.innerHTML = `<i class="fas fa-volume-up"></i>`
    } else {
        ampeSong.muted = true;
        muteButton.innerHTML =`<i class="fas fa-volume-mute"></i>`
    }
}

function initGame(numberOfPlayers ) {
    if (window.__gameOver) {
        return window.location.reload()
    }
    const audio = document.getElementById("ampeSong");
   audio.play()
   const muteButton = document.getElementById('mute')
   muteButton.style.visibility = 'visible'
   muteButton.addEventListener('click', muteOrUnmute)
    const ctx = canvas.getContext('2d')
    const game = new Game(ctx, numberOfPlayers);
    game.drawGame();
    disabled = document.getElementById('start-button').disabled = true;




    // const chooseButton = document.createElement('button');
    // chooseButton.innerText = 'Choose Color';

    document.getElementsByClassName('dropdown')[0].style.visibility = 'visible'
    // document.getElementById('dropdown').append(chooseButton);

    const yellowButton = document.getElementsByClassName('yellowChoice')[0];

    yellowButton.addEventListener('click', () => {
        game.makeMove('yellow')
    })

    const blueButton = document.getElementsByClassName('blueChoice')[0];

    blueButton.addEventListener('click', () => {
        game.makeMove('chocolate')
    })
}
