import Puzzle from "./PuzzleCreator";

const GameBoard = (() => {

    const createGrid = (container) => {

        for (let c = 0; c < 3 * 3; c++) {
            let cell = document.createElement("div");
            container.appendChild(cell).className = "medium-grid-box";
            cell.id = `${c + 1}`;
        }

        const boxes = [...document.querySelectorAll(".medium-grid-box")];
        boxes.forEach((box) => {
            for (let c = 0; c < 3 * 3; c++) {
                let cell = document.createElement("div");
                box.appendChild(cell).className = "small-grid-box";
                let answer = document.createElement("p");
                cell.appendChild(answer);
                answer.innerText = (c + 1);
                cell.id = `${c + 1}`;
            }
        });
    };


    

    return {
        createGrid,
        
    }

})();

export default GameBoard;