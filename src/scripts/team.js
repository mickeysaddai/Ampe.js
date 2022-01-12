const Player = require('./player');

const TEAM_TYPE = {
    TEAM_MATCH: 'TEAM_MATCH',
    TEAM_UNMATCH: 'TEAM_UNMATCH'
};

class Team {
    players;
    teamType;
    numberOfPlayers;
    ctx;
    currentPlayerPosition;

    constructor(numberOfPlayers, teamType, ctx) {
        this.numberOfPlayers = numberOfPlayers;
        this.teamType = teamType;
        this.ctx = ctx;
        this.currentPlayerPosition = 0;

    }

    getTeamYCoord() {
        const startingMatchYCoord = 155;
        const startingUnmatchYCoord = 55;
        return this.teamType === TEAM_TYPE.TEAM_MATCH ? startingMatchYCoord : startingUnmatchYCoord;
    }

    createPlayers() {
        let startingXCoord = 75;
        let playerList = [];
        for (let i = 0; i < this.numberOfPlayers; i++) {
            // console.log(startingXCoord, this.getTeamYCoord())
            const currentPlayer = new Player(i, this.ctx, startingXCoord, this.getTeamYCoord(), this.teamType);
            currentPlayer.drawPlayer()
            playerList.push(currentPlayer);
        
        }
        this.players = playerList;
        return playerList;
    }


    activateCurrentPlayer({ chosenColor, shouldReset = false }) {
        this.resetInactivePlayers()
        if (shouldReset) {
            // reset current player
            this.getCurrentPlayer().drawPlayer()
        }
        let currentPlayer = shouldReset ? this.resetToFirstPlayer() : this.getCurrentPlayer();

        if (this.teamType === TEAM_TYPE.TEAM_MATCH) {
            currentPlayer.setPlayerColor(chosenColor)
        } else {
            currentPlayer.setPlayerColor()
        }
    }

    getCurrentPlayer() {
        return this.players[this.currentPlayerPosition];

    }

    setNextPlayer() { 
        let killedStatus = false;
        const currentPlayer = this.getCurrentPlayer()
        this.resetInactivePlayers()

        if (currentPlayer.pos < this.players.length - 1) {
            this.currentPlayerPosition++;
            return killedStatus

        } else {
            currentPlayer.killPlayer();
            killedStatus = true;
            if (this.players.length === 1) {
                this.players = []
                // console.log("killed last player in ", this.teamType, "isLost ->", this.isLoser())
                return killedStatus
            } else {
                this.players = this.players.slice(0, this.players.length - 1);
                this.resetToFirstPlayer()
                return killedStatus;
            }

        }
    }

    resetInactivePlayers() {
        for (let i = 0; i < this.currentPlayerPosition; i++) {
            // console.log("resettting players for team", this.teamType)
            this.players[i].drawPlayer()
        }
    }

    resetToFirstPlayer() {
        this.currentPlayerPosition = 0;
        return this.getCurrentPlayer()
    }

    isLoser() {
        return this.players.length === 0;

    }



}



module.exports = Team;