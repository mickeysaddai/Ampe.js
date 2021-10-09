
const STATUS_TYPES = { //enum
    ACTIVE : 'ACTIVE',
    INACTIVE: 'INACTIVE',
    DEAD: 'DEAD'
}

class Player {
    pos;
    color;
    status; 

    
    constructor(){
        this.pos = pos,
        this.color = color,
        this.status = STATUS_TYPES.INACTIVE;
    }
    
    isDead(){
        return this.status === STATUS_TYPES.DEAD
    }
    renderMove(){

    }
}


module.exports = Player;