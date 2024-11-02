import battleship3 from "../images/battleship3.png";
import battleship2 from "../images/battleship2.png";
import battleship4 from "../images/battleship4.png";

export const displayScreen = () => {
    const gameWrapper = document.createElement("div");
    gameWrapper.id = "game";

    const title = document.createElement("h1");
    title.id = "title";
    title.textContent = "BATTLESHIP";

    const enemyBoard = document.createElement("div");
    enemyBoard.id = "enemy-board";

    for(let i = 0; i < 10; i++){
        for(let j = 0; j < 10; j++){
            const cell = document.createElement("div");
        
            cell.className = "grid-dot";
            cell.classList.add("enemy");

            cell.dataset.x = i;
            cell.dataset.y = j;
            enemyBoard.appendChild(cell);
        }
        
    }

    const divider = document.createElement("div");
    divider.id = "divider";

    const playerBoard = document.createElement("div");
    playerBoard.id = "player-board";

    for(let i = 0; i < 10; i++){
        for(let j = 0; j < 10; j++){
            const cell = document.createElement("div");
            cell.className = "grid-dot";
            cell.dataset.x = i;
            cell.dataset.y = j;

            playerBoard.appendChild(cell);
        }
        
    }

/*

    
    
   
    battleship3Icon.src = battleship3;
    battleship3Container.appendChild(battleship3Icon);

    const battleship2Container = document.createElement("div");
    battleship2Container.id = "battleship-2-container";
    const battleship2Icon = document.createElement("img");
    battleship2Icon.setAttribute("draggable", true);
    battleship2Icon.src = battleship2;
    battleship2Container.appendChild(battleship2Icon);


    const battleship4Container = document.createElement("div");
    battleship4Container.id = "battleship-4-container";
    const battleship4Icon = document.createElement("img");
    battleship4Icon.setAttribute("draggable", true);
    battleship4Icon.src = battleship4;
    battleship4Container.appendChild(battleship4Icon);

   




    const shipsContainer = document.createElement("div");
    shipsContainer.id = "ship-container";

    const battleship3Container = document.createElement("div");
    battleship3Container.id = "battleship-3-container";
    const battleship3Icon = document.createElement("div");

    const battleship3block1 = document.createElement("div");
    const battleship3block2 = document.createElement("div");
    const battleship3block3 = document.createElement("div");    

    battleship3Icon.appendChild(battleship3block1);
    battleship3Icon.appendChild(battleship3block2);
    battleship3Icon.appendChild(battleship3block3);


    battleship3Icon.setAttribute("draggable", true);
    battleship3Icon.classList.add("ship3");
    battleship3Container.appendChild(battleship3Icon);

    shipsContainer.appendChild(battleship3Container);
    gameWrapper.appendChild(shipsContainer);
*/

    const buttonsWrapper = document.createElement("div");
    buttonsWrapper.id = "buttons-wrapper";

    const randomizeBoardButton = document.createElement("button");
    randomizeBoardButton.id = "randomize-board";

    randomizeBoardButton.textContent = "Randomize Board";

    const startGameButton = document.createElement("button");
    startGameButton.id = "start-game";
    startGameButton.textContent = "Start Game"

    buttonsWrapper.appendChild(randomizeBoardButton);
    buttonsWrapper.appendChild(startGameButton);

    gameWrapper.appendChild(title);
    gameWrapper.appendChild(enemyBoard);
    gameWrapper.appendChild(divider);
    gameWrapper.appendChild(playerBoard);
    gameWrapper.appendChild(buttonsWrapper);
    


    return gameWrapper
}