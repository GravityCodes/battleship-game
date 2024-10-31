import {HumanPlayer, ComputerPlayer} from "./player.js"
import { displayScreen } from "../components/gameDisplay.js"
import {renderBoard} from "../components/renderBoard.js";
import reset from "../style/reset.css"
import style from "../style/style.css"


const $htmlContainer = document.querySelector("main");
$htmlContainer.appendChild(displayScreen());

const $enemyBoard = document.querySelector("#enemy-board");
const $playerBoardCells = document.querySelectorAll("#player-board .grid-dot");



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

//players turn first
let cpuTurn = false;
let gameInPlay = true;
const controller = new AbortController();

const placeAttack = (cell) => {
    cell.classList.add(player.Attack([cell.dataset.x, cell.dataset.y], cpu));
    cpuTurn = true;
    controller.abort();
}

const cpuPlaceAttack = () => {
    cpu.Attack(player);
}

cpuPlaceAttack();
renderBoard(player.gameBoard.board);

$enemyBoard.addEventListener('click', e => {
    if(e.target.id != "enemy-board"){
        placeAttack(e.target);
    }
}, {signal: controller.signal});








