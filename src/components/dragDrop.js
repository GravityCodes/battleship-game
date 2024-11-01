export const initDragDrop = () => {
    function dragstartHandler(e){
        e.dataTransfer.setData("text/uri-list", e.target.src);
    }
    
    window.addEventListener("DOMContentLoaded", () => {
        const battleships = document.querySelectorAll("#ship-container div");
    
        battleships.forEach( battleship => {
            battleship.addEventListener("dragstart", dragstartHandler);
        })
    });
}