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


});