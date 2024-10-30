import {HumanPlayer, ComputerPlayer} from "./player.js"
import { displayScreen } from "../components/gameDisplay.js"
import reset from "../style/reset.css"
import style from "../style/style.css"
import { initGame } from "./initGame.js";

const $htmlContainer = document.querySelector("main");

$htmlContainer.appendChild(displayScreen());

initGame();