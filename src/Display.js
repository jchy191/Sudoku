const Display = (() => {

    function createGrid(container) {
        let c = 0;
        for (let i = 0; i < 9; i++) 
            for (let j = 0; j < 9; j++) {
                let smallCell = document.createElement("div");
                container.appendChild(smallCell).className = "small-grid-box";
                smallCell.style.gridArea = `${i + 1}/${j + 1}/${i + 2}/${j + 2}`;
                smallCell.id = `${c}`;
                c++;
                smallCell.appendChild(document.createElement("p"));
            }
        

        for (let i = 0; i < 3; i++)
            for (let j = 0; j < 3; j++) {
                let mediumCell = document.createElement("div");
                container.appendChild(mediumCell).className = "medium-grid-box";
                mediumCell.style.gridArea = `${i * 3 + 1}/${j * 3 + 1}/${(i + 1) * 3 + 1}/${(j + 1) * 3 + 1}`;
            }
    }

    function renderNumbers(board) {
        let cells = [...document.querySelectorAll(".small-grid-box")];
        let c = 0;
        for (let i = 0; i < 9; i++) 
            for (let j = 0; j < 9; j++) {
                
                if (board[i][j] != 0) 
                    cells[c].firstChild.innerText = board[i][j];
                if (board[i][j] == 0) {
                    _createTextEntry(cells[c], i, j)
                }
                c++;
            }
    }

    function highlightClashingCells(clashes) {
        let cells = [...document.querySelectorAll(".small-grid-box")];
        clashes.forEach(clash => {
            let xRow = parseInt(clash.slice(0,1));
            let xCol = parseInt(clash.slice(1,2));
            let indexOfClashingCell = xRow * 9 + xCol;
            cells[indexOfClashingCell].classList.add('error');
        })
    }

    function resetClashingCells() {
        let cells = [...document.querySelectorAll(".small-grid-box")];
        cells.forEach(cell => cell.classList.remove('error'));
    }

    function _createTextEntry(container, i, j) {
        let inputText = document.createElement("input");
        inputText.setAttribute("type", "text");
        inputText.setAttribute("maxlength", "1");
        inputText.setAttribute("size", "1");
        inputText.setAttribute("patter", "[1-9]")
        inputText.id = `${i}${j}`;
        inputText.className = "sudoku-input";
        container.appendChild(inputText);
    }
    
    return {
        createGrid,
        renderNumbers,
        highlightClashingCells,
        resetClashingCells
    }

})();

module.exports = Display;