import Ship from "./ship"

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
    }

    //create ship instance and place it on board.
    
    placeShipVertical(size, coords){
        
        const ship = new Ship(size);
        
        //Place ship in ships object with the name being the coords.
        this.ships[coords] = ship;

        //Place ship object in board vertically.
        for(let i = coords[0]; i < size; i++){
            this.board[i][coords[1]] = coords;
        }

    }

    placeShipHorizontal(size, coords){
  
        const ship = new Ship(size);
        
        //Place ship in ships object with the name being the coords.
        this.ships[coords] = ship;

        //Place ship object in board vertically.
        for(let i = coords[1]; i < size; i++){
            this.board[coords[0]][i] = coords;
        }

    }

    


    hasShipAt(coords){
  
        return this.board[coords[0]][coords[1]] != 0 ? true : false;
    }

}