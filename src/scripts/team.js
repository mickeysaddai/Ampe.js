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
    constructor(numberOfPlayers, teamType, ctx) {
        this.numberOfPlayers = numberOfPlayers;
        this.teamType = teamType;
        this.players = [];
        this.ctx = ctx;
    }

    getTeamYCoord() {
        const startingMatchYCoord = 75;
        const startingUnmatchYCoord = 185;
        return this.teamType === TEAM_TYPE.TEAM_MATCH ? startingMatchYCoord : startingUnmatchYCoord;
    }

    createPlayers() {
        const startingXCoord = 100;
        for (let i = 0; i < this.numberOfPlayers; i++) {
            const currentPlayer = new Player(i, this.ctx, startingXCoord, this.getTeamYCoord());
            currentPlayer.drawPlayer();
            startingXCoord += 75;
            // startingX,
            // yCoord
            // some color

        }
    }

}

module.exports = Team;