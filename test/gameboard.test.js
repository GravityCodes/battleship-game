import GameBoard from "../src/gameboard";

const gameBoard = new GameBoard();

describe("GameBoard class functions work", () => {

    test("placeShipVertical() places a ship instance to the board", () => {
        gameBoard.placeShipVertical(3,[0,0]);

        expect(gameBoard.hasShipAt([0,0])).toBe(true);
    });

    test("placeShipHorizontal() places a ship instance to the board", () => {
        gameBoard.placeShipHorizontal(3,[0,2]);

        expect(gameBoard.hasShipAt([0,2])).toBe(true);
    });

    test("receiveAttack() hits ships correctly", () => {
                
        expect(gameBoard.receiveAttack([0,0])).toBe(true);

    });

    test("receiveAttack() misses ships correctly", () => {
                
        expect(gameBoard.receiveAttack([5,0])).toBe(false);

    });

    test("isAllShipsSunk() reports false when all ships are not sunk", () => {

        expect(gameBoard.isAllShipsSunk()).toBe(false);

    });

    test("isAllShipsSunk() reports true when all ships are sunk", () => {
        
        //sink vertical ship
        gameBoard.receiveAttack([0,0]);
        gameBoard.receiveAttack([1,0]);
        gameBoard.receiveAttack([2,0]);

        //sink horizontal ship
        gameBoard.receiveAttack([0,2]);
        gameBoard.receiveAttack([0,3]);
        gameBoard.receiveAttack([0,4]);
        expect(gameBoard.isAllShipsSunk()).toBe(false);

    });


});