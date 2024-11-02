import GameBoard from "./gameboard.js"

class Player {
    constructor(){
        this.gameBoard = new GameBoard();
    }

    Attack(coords, enemy){
       return enemy.gameBoard.receiveAttack(coords);
    }
}

export class HumanPlayer extends Player {
    constructor(){
        super().gameBoard;
    }
}

export class ComputerPlayer extends Player {
    constructor() {
        super().gameBoard;
        this.attacks = [];
    }
    // Edit so it knows not to attack on a place it already hit.
    Attack(enemy){
        let x = Math.floor(Math.random() * 9);
        let y = Math.floor(Math.random() * 9);
        
        if(this.attacks.includes(`[${x}${y}]`) == false){
            this.attacks.push(`[${x}${y}]`);
            return enemy.gameBoard.receiveAttack([x,y]);
        }
        
        this.Attack(enemy);
        
     }

}
