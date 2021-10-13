class Scoreboard {
    playerMatchScore;
    playerUnMatchScore;
    constructor(){
        this.playerMatchScore = 0;
        this.playerUnMatchScore = 0;

    }

    updatePlayerMatchScore(){
        this.playerMatchScore ++;
        return this.playerMatchScore;


    };

    updatePlayerUnMatchScore(){
        this.playerUnMatchScore ++;
        return this.playerUnMatchScore;

    };
    //board - [];
    //team A - arr[0]
    //team B - arr[1];
    //increase Team A
    // increas Team B
    //getWinenr method


}

module.exports = Scoreboard;