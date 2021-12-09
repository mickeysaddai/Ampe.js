const Game = require('./scripts/game.js');

document.addEventListener("DOMContentLoaded", () => {
    launchModal()
    const canvas = document.getElementById('canvas'); 
    canvas.width = 680;
    canvas.height = 200;
   

    
    document.getElementsByClassName('dropdown')[0].addEventListener('click', () => {
        document.getElementById("myDropdown").classList.toggle("show");
    })

    document.getElementById('start-button').addEventListener('click', initGame)

    document.getElementsByClassName("instructions")[0].addEventListener('click', () => {
        console.log("clickedMe")
        const skipInput = true;
        launchModal(skipInput)

    })

})


function launchModal(skipInput = false) {
    const modal = document.getElementById("myModal");
    
    // Get the button that opens the modal
    
    // Get the <span> element that closes the modal
    const span = document.getElementsByClassName("close")[0];
    const closeButton = document.getElementById("closeModal")
    closeButton.style.visibility = 'hidden'
    
    
    // mnb When the user clicks the button, open the modal 
    
    modal.style.display = "block";
    
    
    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }
    const hideModal = document.getElementById("hideModal");
    if (skipInput === true){
        hideModal.style.visibility = 'hidden'
         closeButton.style.visibility = 'visible'
        
        return 
    }

   

    const beginButton = document.getElementById('beginButton');
    beginButton.addEventListener('click', () => {
     
       const choosePlayerButtons =  document.querySelectorAll('[name="age"]')
        let selectedValue = null;
             choosePlayerButtons.forEach(button => {
                //  console.log("looping")

           if (button.checked === true){
               selectedValue = button['value']
           }

       })
        modal.style.display = "none";
        initGame(selectedValue)
    })
}


function muteOrUnmute() {
    const ampeSong = document.getElementById("ampeSong");
    const muteButton = document.getElementById('mute');

    if (ampeSong.muted) {
        ampeSong.muted = false;
        muteButton.innerHTML = `<i class="fas fa-volume-mute"></i>`
    } else {
        ampeSong.muted = true;
        muteButton.innerHTML =`<i class="fas fa-volume-up"></i>`
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


    document.getElementsByClassName('dropdown')[0].style.visibility = 'visible'

    const yellowOption = document.getElementsByClassName('yellowChoice')[0];

    yellowOption.addEventListener('click', () => {
      
        game.makeMove('yellow')
       
        
    })

    const blueButton = document.getElementsByClassName('blueChoice')[0];

    blueButton.addEventListener('click', () => {
        game.makeMove('chocolate')
    })
}

