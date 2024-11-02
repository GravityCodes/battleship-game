/*
    Add a class called ship to a cell in the game board that will represent a part of the ship.
*/

export const renderBoard = (board) => {

    // Get the coords of each block on the board and translate it to the screen's board.
    const $playerBoard = document.querySelectorAll("#player-board .grid-dot");    

    for(let i = 0; i < 10; i++){
        for(let j = 0; j < 10; j++){
            if(board[i][j] == 2) {
                $playerBoard[Number(`${i}${j}`)].classList.add("hit");
                $playerBoard[Number(`${i}${j}`)].classList.add("ship");
            }
            else if(board[i][j] != 0 && board[i][j] != 1){
                $playerBoard[Number(`${i}${j}`)].classList.add("ship");
            }
            else if(board[i][j] == 1){
                $playerBoard[Number(`${i}${j}`)].classList.add("false");
            }
            else {
                $playerBoard[Number(`${i}${j}`)].classList.remove("ship");
                $playerBoard[Number(`${i}${j}`)].classList.remove("false");
            }
        }
    }
    
}