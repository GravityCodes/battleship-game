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



function randomizeBoard(playerObject) {

    playerObject.gameBoard.clearGameBoard();

    for(let i=0; i < 2; i++){
        
        let x = Math.floor(Math.random() * 9);
        let y = Math.floor(Math.random() * 6);

        if(playerObject.gameBoard.hasShipAt([x,y]) != true){
            playerObject.gameBoard.placeShipHorizontal(3,[x,y]);
        }
    }

    for(let i=0; i < 2; i++){
        
        let x = Math.floor(Math.random() * 6);
        let y = Math.floor(Math.random() * 9);

        if(playerObject.gameBoard.hasShipAt([x,y]) != true){
            playerObject.gameBoard.placeShipVertical(4,[x,y]);
        }
    }
    
    
}

const randomizeBoards = () => {
    randomizeBoard(player);
    randomizeBoard(cpu);
    renderBoard(player.gameBoard.board);
}


const initNewGame = () => {
    randomizeBoard(player);
    randomizeBoard(cpu);
    renderBoard(player.gameBoard.board);

    const randomizeBoardButton = document.querySelector("#randomize-board");
    const startGameButton = document.querySelector("#start-game");

    randomizeBoardButton.addEventListener("click", randomizeBoards);
    startGameButton.addEventListener("click", startGame);
}

const startGame = () => {
    
    document.querySelector("#start-game").remove();
    document.querySelector("#randomize-board").remove();

    renderBoard(player.gameBoard.board);


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
            setTimeout(() => {
                initNewGame();
            }, 1500);

        }

        console.log("Game still going");
    }

    const placeAttack = (cell) => {

        if(cell.classList.contains("false") == true) return;
        if(cell.classList.contains("true")) return;

        if(cpuTurn == false){
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
}


initNewGame();






