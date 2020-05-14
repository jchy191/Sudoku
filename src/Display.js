const Display = (() => {

    function createGrid() {
        const container = document.querySelector('.game-board');
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
                if (board[i][j] !== 0) 
                    cells[c].firstChild.innerText = board[i][j];
                if (board[i][j] === 0) {
                    _createTextEntry(cells[c], i, j)
                }
                c++;
            }
    }

    function highlightClashingCells(clashes) {
        let cells = [...document.querySelectorAll(".small-grid-box")];
        clashes.forEach(clash => {
            let row = parseInt(clash.slice(0,1));
            let col = parseInt(clash.slice(1,2));
            let indexOfClashingCell = row * 9 + col;
            cells[indexOfClashingCell].classList.add('error');
        })
    }

    function resetClashingCells() {
        let cells = [...document.querySelectorAll(".small-grid-box")];
        cells.forEach(cell => cell.classList.remove('error'));
    }

    function addHint({row, col, value}) {
        let cells = [...document.querySelectorAll(".small-grid-box")];
        let cell = cells[row * 9 + col];
        cell.innerHTML = "";
        cell.appendChild(document.createElement("p"));
        cell.firstChild.innerText = value;
        cell.firstChild.classList.add('hint-added')
    }

    function gameWon() {
        setVisibility(".win-screen", true);
    }

    function clearBoard() {
        const grid = document.querySelector(".game-board");
        grid.innerHTML="";
    }

    function setVisibility(selector, visible) {
        document.querySelector(selector).style.display = visible ? 'block' : 'none';
    }


    return {
        createGrid,
        renderNumbers,
        highlightClashingCells,
        resetClashingCells,
        addHint,
        gameWon,
        clearBoard,
        setVisibility
    }


    function _createTextEntry(container, i, j) {
        let inputTextbox = document.createElement("input");
        inputTextbox.setAttribute("type", "text");
        inputTextbox.setAttribute("maxlength", "1");
        inputTextbox.setAttribute("size", "1");
        inputTextbox.setAttribute("patter", "[1-9]")
        inputTextbox.id = `${i}${j}`;
        inputTextbox.className = "sudoku-input";
        container.appendChild(inputTextbox);
    }
    

})();

export default Display;