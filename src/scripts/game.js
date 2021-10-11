const Team = require('./team') 
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
     this.teamMatch = new Team(this.numberOfPlayers, 'TEAM_MATCH', this.ctx );
     this.teamUnmatch = new Team(this.numberOfPlayers, 'TEAM_UNMATCH', this.ctx);
     this.ctx.strokeRect(0, 0, 500, 300)
     
     this.teamMatch.createPlayers();
     this.teamUnmatch.createPlayers();
    }
    
    promptUser(){
        //privides an option of two colors for using to choose one
        //once user chooses color //prompts user to pick "Match" or "Unmatched"
    }

    randomColorGenerator(){
        //generates a pair of random colors for user to choose from
    }

    setComputerColor(){


    }

    makeMove(){
        this.teamMatch.activateCurrentPlayer();
        this.teamUnmatch.activateCurrentPlayer();

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