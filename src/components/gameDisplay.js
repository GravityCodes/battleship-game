

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

    gameWrapper.appendChild(title);
    gameWrapper.appendChild(enemyBoard);
    gameWrapper.appendChild(divider);
    gameWrapper.appendChild(playerBoard);

    return gameWrapper
}