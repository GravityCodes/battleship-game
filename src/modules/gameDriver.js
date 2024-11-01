import {HumanPlayer, ComputerPlayer} from "./player.js"
import { displayScreen } from "../components/gameDisplay.js"
import {renderBoard} from "../components/renderBoard.js";
import reset from "../style/reset.css"
import style from "../style/style.css"
import { initDragDrop } from "../components/dragDrop.js";

const $htmlContainer = document.querySelector("main");
$htmlContainer.appendChild(displayScreen());

const $enemyBoard = document.querySelector("#enemy-board");
const $playerBoardCells = document.querySelectorAll("#player-board .grid-dot");



const player = new HumanPlayer();
const cpu = new ComputerPlayer();

    
renderBoard(player.gameBoard.board);
initDragDrop();


//players turn first

let gameInPlay = true;
let cpuTurn = false;

const cpuPlaceAttack = () => {
    cpu.Attack(player);
}

const checkForWinner = () => {
    if(player.gameBoard.isAllShipsSunk()){
        console.log("CPU WON");
    }
    else if(cpu.gameBoard.isAllShipsSunk()){
        console.log("PLAYER WON");

    }

    console.log("Game still going");
}

const placeAttack = (cell) => {

    if(cpuTurn == false){
        console.log(cell)
        cell.classList.add(player.Attack([cell.dataset.x, cell.dataset.y], cpu));
        
        checkForWinner();
        cpuTurn = true;

        setTimeout(() => {
            cpuPlaceAttack();
            renderBoard(player.gameBoard.board);
            cpuTurn = false;
        },1500);
    }  
}
$enemyBoard.addEventListener('click', e => {
    if(e.target.id != "enemy-board"){
        placeAttack(e.target);
    }
});








