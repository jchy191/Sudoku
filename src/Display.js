import Puzzle from "./Puzzle";

const Display = (() => {

    function createGrid(container) {
        let c = 0;
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                let smallCell = document.createElement("div");
                container.appendChild(smallCell).className = "small-grid-box";
                smallCell.style.gridArea = `${i + 1}/${j + 1}/${i + 2}/${j + 2}`;
                smallCell.id = `${c}`;
                c++;
                smallCell.appendChild(document.createElement("p"));
            }
        }

        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                let mediumCell = document.createElement("div");
                container.appendChild(mediumCell).className = "medium-grid-box";
                mediumCell.style.gridArea = `${i * 3 + 1}/${j * 3 + 1}/${(i + 1) * 3 + 1}/${(j + 1) * 3 + 1}`;
            }
        }
    }

    function renderNumbers(board) {
        let cells = [...document.querySelectorAll(".small-grid-box")];
        for (let i = 0; i < 81; i++) {
            cells[i].firstChild.innerText = board[i];
        }
    }

    
    return {
        createGrid,
        renderNumbers
    }

})();

export default Display;