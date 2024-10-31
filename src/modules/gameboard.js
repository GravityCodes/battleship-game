import Ship from "./ship.js"

export default class GameBoard {
    constructor(){
        this.board = [
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
        ];
        this.ships = {};
        this.missAttacks = [];
    }

    //create ship instance and place it on board.
    
    placeShipVertical(size, coords){
        
        const ship = new Ship(size);
        
        //Place ship in ships object with the name being the coords.
        this.ships[coords] = ship;

        //Place ship object in board vertically.
        for(let i = 0; i < size; i++){
            this.board[coords[0] + i][coords[1]] = coords;
        }

    }

    placeShipHorizontal(size, coords){
  
        const ship = new Ship(size);
        
        //Place ship in ships object with the name being the coords.
        this.ships[coords] = ship;

        //Place ship object in board vertically.
        for(let i = 0; i < size; i++){
            this.board[coords[0]][coords[1] + i] = coords;
        }

    }


    receiveAttack(coords) {
        if(this.board[coords[0]][coords[1]] != 0){
            this.ships[this.board[coords[0]][coords[1]]].hit();
            return true;
        }
        
        this.board[coords[0]][coords[1]] = 1;
        this.missAttacks.push(coords);
        return false;
    }

    isAllShipsSunk() {

        for(let ship of Object.values(this.ships)){
                if(ship.sunk == false){
                return false
            }
        }

        return true
    }

    hasShipAt(coords){
  
        return this.board[coords[0]][coords[1]] != 0 ? true : false;
    }

}