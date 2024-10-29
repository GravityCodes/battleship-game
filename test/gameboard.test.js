import GameBoard from "../src/gameboard";

const gameBoard = new GameBoard();

describe("GameBoard class functions work", () => {

    test("placeShip() places a ship instance to the board", () => {
        gameBoard.placeShipVertical(3,[0,0]);

        expect(gameBoard.hasShips()).toBe(true);
    });
});