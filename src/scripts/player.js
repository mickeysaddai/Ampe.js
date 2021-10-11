
const STATUS_TYPES = { //enum
    ACTIVE : 'ACTIVE',
    INACTIVE: 'INACTIVE',
    DEAD: 'DEAD'
}

class Player {
    pos;
    color;
    status;
    ctx; // tie this canvas to the window instead of passing it down each time 
    xCoord // xpositionm
    yCoord // y position
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
            this.ctx.fillStyle = "pink"; 
            
        } else {
            let rand = Math.random();
            this.ctx.fillStyle = "black"; 
        }
        this.ctx.closePath();
        this.ctx.fill();

        // this.ctx.addEventListener('click', () =>{
        //     console.log('you clicked me', this)
        //     this.ctx.fillStyle = "blue";
        //     this.ctx.fill();
        // })
    }

    clearColor(){
         this.color = '';

    }

    setPlayerColor(color = "blue"){
        let that = this;
        setTimeout(function () { 
            that.drawPlayer()
            that.clearColor();
            that.color = color;
            ctx.fillStyle = that.color;
            ctx.fill();
            ctx.closePath() }, 3000);
        
    }
            
}


module.exports = Player;
