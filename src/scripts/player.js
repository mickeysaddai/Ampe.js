
const STATUS_TYPES = { 
    ACTIVE : 'ACTIVE',
    INACTIVE: 'INACTIVE',
    DEAD: 'DEAD'
}

class Player {
    pos;
    color;
    status;
    ctx; 
    xCoord;
    yCoord;
    teamType;
    
    constructor(pos,ctx, xCoord, yCoord, teamType){
        this.pos = pos,
        this.color = "color",
        this.status = STATUS_TYPES.INACTIVE;
        this.xCoord = xCoord;
        this.yCoord = yCoord;
        this.ctx = ctx;
        this.teamType = teamType;
    }
    
    isDead(){
        return this.status === STATUS_TYPES.DEAD;
    }
    renderMove(){
        return this.color;

    }

    setStatus(status){
        this.status = STATUS_TYPES[status];
    }

    drawPlayer() {
        this.ctx.beginPath();
        this.ctx.arc(this.xCoord, this.yCoord, 20, 0, 2 * Math.PI);
        if(this.teamType === 'TEAM_MATCH'){
            this.ctx.fillStyle = "white"; 
            
        } else {
            this.ctx.fillStyle = "white";
        }
        this.ctx.closePath();
        this.ctx.fill();
    }

    clearColor(){
         this.color = '';
    }

    setPlayerColor(color = "chocolate"){
        let that = this;
            that.drawPlayer()
            that.clearColor();
            that.color = that.teamType === 'TEAM_MATCH' ? color : that.generateRandomColor();
            that.ctx.fillStyle = that.color;
            that.ctx.fill();
            that.ctx.closePath()    
    }

    deactivatePlayer(){
        this.clearColor();
        // console.log("deactivating player", this.pos, this.teamType)
        this.drawPlayer();
        this.status = STATUS_TYPES.INACTIVE;

    }
    generateRandomColor(){
        const rand = Math.random();

        if (rand < 0.5){
            return "chocolate"
        } else {
            return "yellow";
        }
    }  
    
    killPlayer(){
        // console.log("killing player", this)
        setTimeout(() => {
            this.status = STATUS_TYPES.DEAD;
            this.ctx.beginPath();
            this.ctx.arc(this.xCoord, this.yCoord, 20, 0, 2 * Math.PI);
            this.ctx.fillStyle = "black";
            this.ctx.closePath();
            this.ctx.fill();
        }, 1000)
       
    }
}


module.exports = Player;
