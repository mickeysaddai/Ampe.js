// const Player = require('./player');
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
     
    constructor(numberOfPlayers, teamType, ctx) {
        this.numberOfPlayers = numberOfPlayers;
        this.teamType = teamType;
        this.players = createPlayers();
        this.ctx = ctx;
    }

    getTeamYCoord() {
        const startingMatchYCoord = 75;
        const startingUnmatchYCoord = 185;
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
        const currentPlayer = this.players[this.players.length - 1];
        const second = this.players[1];
        second.setPlayerColor('red');
        // currentPlayer.setPlayerColor("yellow");

        // if (this.teamType === TEAM_TYPE.TEAM_MATCH){
        //     currentPlayer.setPlayerColor("red")
        // } else {
        //     // random generate color for comp player
        //     // currentPlayer.setPlayerColor()
        // }

    }

}



// module.exports = Team;