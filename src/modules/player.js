import GameBoard from "./gameboard.js"

export default class Player {
    constructor(){
        this.board = new GameBoard();
    }
}

export class HumanPlayer extends Player {
    constructor(){
        super().board;
    }
}

export class ComputerPlayer extends Player {
    constructor() {
        super().board;
    }
}
