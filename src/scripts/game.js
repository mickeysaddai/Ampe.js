const Team = require('./team')
const Scoreboard = require('./scoreboard')

class Game {
    ctx;
    numberOfPlayers;
    teamMatch;
    teamUnmatch;
    scoreboard;
    shouldReset;

    constructor(ctx, numberOfPlayers) {
        this.ctx = ctx;
        this.numberOfPlayers = numberOfPlayers;
        this.scoreboard = new Scoreboard();
        this.shouldReset = false;

    }

    drawGame() {
        this.teamUnmatch = new Team(this.numberOfPlayers, 'TEAM_UNMATCH', this.ctx);
        this.teamMatch = new Team(this.numberOfPlayers, 'TEAM_MATCH', this.ctx);
        this.teamUnmatch.createPlayers();
        this.teamMatch.createPlayers();
    }


    /**
     * when a player dies, reset both teams to use their first player
     * 
     * @param {*} chosenColor 
     * @returns 
     */

    
    makeMove(chosenColor) {
        if (this.isGameOver()) {
            return this.finishGame();
        }
        const winnerEle = window.document.getElementById('winner-container');
        const teamMatchScoreEle = document.getElementById('team_match_score')
        const teamUnmatchScoreEle = document.getElementById('team_unmatch_score')

        this.teamUnmatch.activateCurrentPlayer({ chosenColor: null, shouldReset: this.shouldReset });
        this.teamMatch.activateCurrentPlayer({ chosenColor: chosenColor, shouldReset: this.shouldReset });
        const winner = this.getCurrentRoundWinner()
        console.log("current winner is", winner.teamType);
        winnerEle.innerText = `Current winner is ${winner.teamType}`

        const { teamMatchScore, teamUnmatchScore } = this.scoreboard.getCurrentScore()
        teamMatchScoreEle.innerText = teamMatchScore;
        teamUnmatchScoreEle.innerText = teamUnmatchScore;
        console.log("score is ", this.scoreboard.getCurrentScore())

        if (winner.teamType === 'TEAM_MATCH') {
            this.shouldReset = this.teamUnmatch.setNextPlayer();
        } else {
            this.shouldReset = this.teamMatch.setNextPlayer()
        }
        console.log("Should Reset...", this.shouldReset)
        if (this.isGameOver()) {
            return this.finishGame();
        }
    }

    getCurrentRoundWinner() {

        console.log("match", this.teamMatch.getCurrentPlayer().color);
        console.log("unmatch", this.teamUnmatch.getCurrentPlayer().color);
        if (this.teamMatch.getCurrentPlayer().color === this.teamUnmatch.getCurrentPlayer().color) {
            this.scoreboard.updateTeamMatchScore();
            return this.teamMatch.getCurrentPlayer();

        } else {
            this.scoreboard.updateTeamUnmatchScore();
            return this.teamUnmatch.getCurrentPlayer();
        }
    }

    isGameOver() {
        console.log("is over?", this.teamMatch.isLoser(), this.teamUnmatch.isLoser(), this.teamMatch.isLoser() || this.teamUnmatch.isLoser())
        return this.teamMatch.isLoser() || this.teamUnmatch.isLoser()
    }

    finishGame() {
        const gamOverContainer = document.getElementById("game-over-container");
        gamOverContainer.style.visibility = 'visible';
        document.getElementsByClassName('dropdown')[0].style.visibility = 'hidden';
        const enableStartButton = document.getElementById('start-button');
        enableStartButton.disabled = false;
        enableStartButton.innerText = "Reset Game"
        window.__gameOver = true;
    }
}


module.exports = Game;