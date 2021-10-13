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
        let startingXCoord = 100;
        let playerList = [];
        for (let i = 0; i < this.numberOfPlayers; i++) {
            // console.log(startingXCoord, this.getTeamYCoord())
            const currentPlayer = new Player(i, this.ctx, startingXCoord, this.getTeamYCoord(),this.teamType);
            currentPlayer.drawPlayer();
            playerList.push(currentPlayer);
            startingXCoord += 75;
            // currentPlayer.setPlayerColor(color);
        }
        this.players = playerList;
        return playerList;
    }

    
    activateCurrentPlayer(chosenColor){
        const currentPlayer = this.getCurrentPlayer();
        
        if (this.teamType === TEAM_TYPE.TEAM_MATCH){
            currentPlayer.setPlayerColor(chosenColor)
        } else {
            
            currentPlayer.setPlayerColor()
        }
    }
    
    getCurrentPlayer(){
        return this.players[this.currentPlayerPosition];
        
    }

    setNextPlayer() { //change to set next player
        const currentPlayer = this.getCurrentPlayer()
        // currentPlayer.deactivatePlayer();

        if (currentPlayer.pos < this.players.length-1) {
            this.currentPlayerPosition++;
            return this.players[this.currentPlayerPosition];

        } else {
            currentPlayer.killPlayer();
            if (this.players.length === 1) {
                this.players = []
                console.log("killed last player in ", this.teamType, "isLost ->", this.isLoser())
                return null
            } else {
                this.players = this.players.slice(0, this.players.length - 1);
                this.currentPlayerPosition = 0;
                return this.getCurrentPlayer()
            }

        }
    }

    resetToFirstPlayer() {}

    isLoser(){
        return this.players.length === 0;
        
    }



}



module.exports = Team;