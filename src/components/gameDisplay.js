

export const displayScreen = () => {
    const gameWrapper = document.createElement("div");
    gameWrapper.id = "game";

    const title = document.createElement("h1");
    title.id = "title";
    title.textContent = "BATTLESHIP";

    const enemyBoard = document.createElement("div");
    enemyBoard.id = "enemy-board";

    for(let i = 0; i < 100; i++){
        const cell = document.createElement("div");
        cell.className = "grid-dot";

        enemyBoard.appendChild(cell);
    }

    const divider = document.createElement("div");
    divider.id = "divider";

    const playerBoard = document.createElement("div");
    playerBoard.id = "player-board";

    for(let i = 0; i < 100; i++){
        const cell = document.createElement("div");
        cell.className = "grid-dot";

        playerBoard.appendChild(cell);
    }

    gameWrapper.appendChild(title);
    gameWrapper.appendChild(enemyBoard);
    gameWrapper.appendChild(divider);
    gameWrapper.appendChild(playerBoard);

    return gameWrapper
}