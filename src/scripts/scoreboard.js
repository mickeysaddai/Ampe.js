

class Scoreboard {
    teamMatchScore;
    teamUnmatchScore;
    constructor(){
        this.teamMatchScore = 0;
        this.teamUnmatchScore = 0;

    }

    updateTeamMatchScore(){
        this.teamMatchScore += 1;
    
        return this.teamMatchScore;


    };

    updateTeamUnmatchScore(){
        this.teamUnmatchScore += 1;
        return this.teamUnmatchScore;

    };

    getCurrentScore() {
        return { 
            teamMatchScore: this.teamMatchScore, 
            teamUnmatchScore: this.teamUnmatchScore
        }
    }

}

module.exports = Scoreboard;