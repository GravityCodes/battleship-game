
/*
export const initDragDrop = () => {


    function dragstartHandler(e){
        e.dataTransfer.setData("text/plain", e.target.);
    }
    
    window.addEventListener("DOMContentLoaded", () => {
        const battleships = document.querySelectorAll("#ship-container div");
        const playerCells = document.querySelectorAll("#player-board .grid-dot");

        battleships.forEach( battleship => {
            battleship.addEventListener("dragstart", dragstartHandler);
        })

        playerCells.forEach( cell => {
            cell.addEventListener("drop", dropHandler);
            cell.addEventListener("dragover", dragoverHandler);
        })
    });


    function dragoverHandler(e) {
        e.preventDefault();
        e.dataTransfer.dropEffect = "move";

    }

    function dropHandler(e) {
        e.preventDefault();
        const data = e.dataTransfer.getData("text/uri-list");


        const shipContainer = document.createElement("div");
        shipContainer.classList.add("ship-3");
        shipContainer.dataset.size = 3;

        shipContainer.style.backgroundImage = data;

        e.target.style.backgroundColor = "grey";
        e.target.nextSibling.style.backgroundColor = "grey";
        e.target.nextSibling.nextSibling.style.backgroundColor = "grey";

    }       



}

*/