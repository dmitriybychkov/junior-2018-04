'use strict';

class MageStrategy {
    constructor(myTeam, myId) {
        this.team = myTeam;
        this.id = myId;
    }

    init(state) {}
    turn(state) {}
}

class KeyboardMageStrategy extends MageStrategy {
    turn(state) {
        let com = prompt('Mage ' + this.id + ': ');
        let action = { id: this.id };
        switch (com) {
            case 'a':
                action.type = ActionType.MOVE;
                action.dir = new Direction(-1, 0);
                break;
            case 's':
                action.type = ActionType.MOVE;
                action.dir = new Direction(0, 1);
                break;
            case 'd':
                action.type = ActionType.MOVE;
                action.dir = new Direction(1, 0);
                break;
            case 'w':
                action.type = ActionType.MOVE;
                action.dir = new Direction(0, -1);
                break;
            case 'j':
                action.type = ActionType.CAST;
                action.spell = new FireballSpell();
                action.spell.dir = new Direction(-1, 0);
                break;
            case 'k':
                action.type = ActionType.CAST;
                action.spell = new FireballSpell();
                action.spell.dir = new Direction(0, 1);
                break;
            case 'l':
                action.type = ActionType.CAST;
                action.spell = new FireballSpell();
                action.spell.dir = new Direction(1, 0);
                break;
            case 'i':
                action.type = ActionType.CAST;
                action.spell = new FireballSpell();
                action.spell.dir = new Direction(0, -1);
                break;
            case 'q':
                throw 'Stop the game';
        }
        return action;
    }
}

class RandomMageStrategy extends MageStrategy {
    turn(state) {
        // TODO: implement throwing a Fireball spell from time to time
        let action = { id: this.id };
        let dir = [new Direction(-1, 0), new Direction(1, 0), new Direction(0, -1), new Direction(0, 1)];
        let n = Math.floor(Math.random() * dir.length);
        let chance = Math.floor(Math.random() * 100);
        if (chance < 80) {
            action.type = ActionType.MOVE;
            action.dir = dir[n];
        } else {            
            action.type = ActionType.CAST;
            action.spell = new FireballSpell();            
            action.spell.dir = dir[n];
        }        
        return action;
    }
}

class ArtificialIntelligence extends MageStrategy{
    turn(state) {
        let action = { id: this.id };
        let dir = [new Direction(-1, 0), new Direction(1, 0), new Direction(0, -1), new Direction(0, 1)];
        let mage;

        for (let x of state.mages) {
            if ( x.id == 2 ) {
                mage=x;
                break;
            }
        }

        let coor = mage.xy;

        let target_mage;

        for (let d of dir) {

            let new_coor = coor;

            while ( true ) {
                new_coor = new_coor.add(d);
                if ( level.getCell(state, new_coor) != Cell.EMPTY ) {
                    if ( level.getCell(state, new_coor) instanceof Mage ) {
                        target_mage = d;
                    }
                    break;
                }
            }

            if (target_mage) {
                action.type = ActionType.CAST;
                action.spell = new FireballSpell();            
                action.spell.dir = target_mage;
                
            } else {  
                let n = Math.floor(Math.random() * dir.length);
                let chance = Math.floor(Math.random() * 100);          
                if (chance < 80) {
                    action.type = ActionType.MOVE;
                    action.dir = dir[n];
                } else {            
                    action.type = ActionType.CAST;
                    action.spell = new FireballSpell();            
                    action.spell.dir = dir[n];
                }   
                return action;    
            }     
        }
    }
}