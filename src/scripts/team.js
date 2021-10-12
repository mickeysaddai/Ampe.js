const Player = require('./player');
const TEAM_TYPE = {
    TEAM_MATCH: 'TEAM_MATCH',
    TEAM_UNMATCH: 'TEAM_UNMATCH'
};

class Team {
    //list of players
    //type of string - match adn unamtch
    //isDead?()
    //two teams : Team A, Team B

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
        const startingMatchYCoord = 185;
        const startingUnmatchYCoord = 75;
        return this.teamType === TEAM_TYPE.TEAM_MATCH ? startingMatchYCoord : startingUnmatchYCoord;
    }

    createPlayers() {
        let startingXCoord = 100;
        let playerList = [];
        for (let i = 0; i < this.numberOfPlayers; i++) {
            console.log(startingXCoord, this.getTeamYCoord())
            const currentPlayer = new Player(i, this.ctx, startingXCoord, this.getTeamYCoord(),this.teamType);
            currentPlayer.drawPlayer();
            playerList.push(currentPlayer);
            startingXCoord += 75;
            // currentPlayer.setPlayerColor(color);

        }
        this.players = playerList;
        return playerList;
    }

    
    activateCurrentPlayer(){
        const currentPlayer = this.getCurrentPlayer();
        
        if (this.teamType === TEAM_TYPE.TEAM_MATCH){
            currentPlayer.activatePlayer("red")
        } else {
            
            currentPlayer.activatePlayer()
        }
    }
    
    getCurrentPlayer(){
        return this.players[this.currentPlayerPosition];
        
    }

    getNextPlayer(){ //change to set next player
       const currentPlayer = this.getCurrentPlayer()
       currentPlayer.deactivatePlayer();
       this.currentPlayerPosition ++;
        return this.players[this.currentPlayerPosition];
    }



}



module.exports = Team;