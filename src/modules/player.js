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
    }

    Attack(enemy){
        let x = Math.floor(Math.random() * 10);
        let y = Math.floor(Math.random() * 10);
        return enemy.gameBoard.receiveAttack([x,y]);
     }

}
