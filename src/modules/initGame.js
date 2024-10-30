import { HumanPlayer, ComputerPlayer } from "./player.js";
import {renderBoard} from "../components/renderBoard.js";

export const initGame = () => {
    const player = new HumanPlayer();
    const cpu = new ComputerPlayer();

    player.gameBoard.placeShipHorizontal(3,[0,0]);
    player.gameBoard.placeShipHorizontal(3,[0,5]);
    player.gameBoard.placeShipVertical(3,[0,9]);
    player.gameBoard.placeShipHorizontal(4,[4,4]);

    cpu.gameBoard.placeShipHorizontal(3,[0,0]);
    cpu.gameBoard.placeShipHorizontal(3,[0,5]);
    cpu.gameBoard.placeShipVertical(3,[0,9]);
    cpu.gameBoard.placeShipHorizontal(4,[4,4]);
    
    renderBoard(player.gameBoard.board);

}