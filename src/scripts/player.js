
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
    
    constructor(pos,ctx,  xCoord, yCoord){
        this.pos = pos,
        this.color = color,
        this.status = STATUS_TYPES.INACTIVE;
        this.xCoord = xCoord;
        this.yCoord = yCoord;
        this.ctx = ctx;
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
        // this.ctx.strokeRect(0, 0, canvas.width, canvas.height)
        // ctx.fillRect(20, 200, 100, 100)

        this.ctx.beginPath();
        this.ctx.arc(this.xCoord, this.yCoord, 20, 0, 2 * Math.PI);
        this.ctx.stroke();
    }
}


module.exports = Player;