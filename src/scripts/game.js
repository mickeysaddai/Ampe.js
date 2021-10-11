const Team = require('./team') 
class Game {
    ctx;
    numberOfPlayers;


    constructor(ctx, numberOfPlayers){
        this.ctx = ctx;
        this.numberOfPlayers = numberOfPlayers;
    }

    startGame(){

    };

    drawGame(){
     const teamMatch = new Team(this.numberOfPlayers, 'TEAM_MATCH', this.ctx );
     const teamUnmatch = new Team(this.numberOfPlayers, 'TEAM_UNMATCH', this.ctx);
     teamMatch.createPlayers();
     teamUnmatch.createPlayers();
    }
    
    promptUser(){
        //privides an option of two colors for using to choose one
        //once user chooses color //prompts user to pick "Match" or "Unmatched"
    }

    randomColorGenerator(){
        //generates a pair of random colors for user to choose from
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