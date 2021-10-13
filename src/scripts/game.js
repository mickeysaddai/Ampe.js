const Team = require('./team') 
const Scoreboard = require('./scoreboard')
class Game {
    ctx;
    numberOfPlayers;
    teamMatch;
    teamUnmatch;
    scoreboard;

    constructor(ctx, numberOfPlayers){
        this.ctx = ctx;
        this.numberOfPlayers = numberOfPlayers;
        this.scoreboard = new Scoreboard();
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
    

    makeMove(chosenColor){
        if (this.isGameOver()) {
            return this.finishGame();
        }
       const winnerEle = window.document.getElementById('winner-container');
        const teamMatchScoreEle = document.getElementById('team_match_score')
        const teamUnmatchScoreEle = document.getElementById('team_unmatch_score')
        
        this.teamUnmatch.activateCurrentPlayer();
        this.teamMatch.activateCurrentPlayer(chosenColor);
        const winner = this.getCurrentRoundWinner()
        console.log("current winner is", winner.teamType);
        winnerEle.innerText = `Current winner is ${winner.teamType}` 

        const { teamMatchScore, teamUnmatchScore }  = this.scoreboard.getCurrentScore()
        teamMatchScoreEle.innerText = teamMatchScore;
        teamUnmatchScoreEle.innerText = teamUnmatchScore;
        console.log("score is ", this.scoreboard.getCurrentScore())

        if (this.isGameOver()){
            return this.finishGame();
        }
       
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
            this.scoreboard.updateTeamMatchScore();
            // console.log("match score is", scoreboard.updateTeamMatchScore())
            return this.teamMatch.getCurrentPlayer();
        
        } else {
            this.scoreboard.updateTeamUnmatchScore();
            // console.log("Unmatch score is", updateTeamUnmatchScore())
            //increment score board for unmatch
            // this.teamMatch.setNextPlayer();
            return this.teamUnmatch.getCurrentPlayer();
        }
    }

    isGameOver(){
        console.log("is over?", this.teamMatch.isLoser(), this.teamUnmatch.isLoser(),  this.teamMatch.isLoser() || this.teamUnmatch.isLoser())
        return this.teamMatch.isLoser() || this.teamUnmatch.isLoser()
    }

    finishGame(){
        const gamOverContainer = document.getElementById("game-over-container");
        gamOverContainer.style.visibility = 'visible';
        document.getElementsByClassName('dropdown')[0].style.visibility = 'hidden';
        const enableStartButton = document.getElementById('start-button').disabled = false;
 
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