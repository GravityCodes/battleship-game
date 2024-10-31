import { HumanPlayer, ComputerPlayer } from "../src/modules/player.js";

const human = new HumanPlayer();
const computer = new ComputerPlayer();

human.gameBoard.placeShipHorizontal(3,[0,1]);
computer.gameBoard.placeShipHorizontal(3,[0,1]);

describe("Attack function works", () => {
    test("HumanPlayer.Attack(coords) returns false when missing", () => {
        
        expect(human.Attack([0,0], computer)).toBe(false);
    });

    test("HumanPlayer.Attack(coords) returns true when hit", () => {
        expect(human.Attack([0,1], computer)).toBe(true);
    });
})