const Team = require('./team') 
const Scoreboard = require('./scoreboard')
class Game {
    ctx;
    numberOfPlayers;
    teamMatch;
    teamUnmatch;

     COLORS = [ "red", "blue", "yellow"]
    constructor(ctx, numberOfPlayers){
        this.ctx = ctx;
        this.numberOfPlayers = numberOfPlayers;
    }

    startGame(){

    };


    drawGame(){
    this.teamUnmatch = new Team(this.numberOfPlayers, 'TEAM_UNMATCH', this.ctx);
     this.teamMatch = new Team(this.numberOfPlayers, 'TEAM_MATCH', this.ctx );
    //  this.ctx.strokeRect(0, 0, 500, 300)
     
     this.teamUnmatch.createPlayers();
     this.teamMatch.createPlayers();
    }
    
    promptUser(){
        //privides an option of two colors for using to choose one
        //once user chooses color //prompts user to pick "Match" or "Unmatched"
    }

    randomColorGenerator(){
        //generates a pair of random colors for user to choose from
    }

    makeMove(chosenColor){
       const winnerEle = window.document.getElementById('winner-container');

        this.teamUnmatch.activateCurrentPlayer();
        this.teamMatch.activateCurrentPlayer(chosenColor);
        const winner = this.getCurrentRoundWinner()
        console.log("current winner is", winner.teamType);
        winnerEle.innerText = `Current winner is ${winner.teamType}` 
       
        if (winner.teamType === 'TEAM_MATCH') {
           this.teamUnmatch.setNextPlayer();
       } else {
           this.teamMatch.setNextPlayer()
       }

    }

    getCurrentRoundWinner(){
        
        console.log("match", this.teamMatch.getCurrentPlayer().color);
        console.log("unmatch", this.teamUnmatch.getCurrentPlayer().color);
        if (this.teamMatch.getCurrentPlayer().color === this.teamUnmatch.getCurrentPlayer().color ){
            //incremenet scoreboard for tema match
            // this.teamUnmatch.setNextPlayer();
            return this.teamMatch.getCurrentPlayer();
        
        } else {
            //increment score board for unmatch
            // this.teamMatch.setNextPlayer();
            return this.teamUnmatch.getCurrentPlayer();
        }
    }


}
//Random color generator
//Startgame - prompt user to eneter number of players -> class team
//Round # --> choose color for active player --> disable color --> start countdonw --> bounce? -- > reveeal --> print score
//timer
//gameOver --> when dead player === teamSize
//puts Player #{name} wins
//

module.exports  = Game;