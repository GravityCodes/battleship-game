import GameBoard from "./gameboard.js"

class Player {
    constructor(){
        this.gameBoard = new GameBoard();
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
}
