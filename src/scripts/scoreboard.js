

class Scoreboard {
    teamMatchScore;
    teamUnmatchScore;
    constructor(){
        this.teamMatchScore = 0;
        this.teamUnmatchScore = 0;

    }

    updateTeamMatchScore(){
        this.teamMatchScore += 1;
        // score = document.getElementsByClassName('scoreboard')[2]
    
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
    //board - [];
    //team A - arr[0]
    //team B - arr[1];
    //increase Team A
    // increas Team B
    //getWinenr method


}

module.exports = Scoreboard;