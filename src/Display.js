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
        let n = 0;
        for (let i = 0; i < 9; i++) 
            for (let j = 0; j < 9; j++) {
                if (board[i][j] != 0) 
                    cells[n].firstChild.innerText = board[i][j];
                if (board[i][j] == 0)
                    _createTextEntry(cells[n], i, j)
                n++;
            }
    }

    function updateBoard(board, value, cellID){
        board[cellID.slice(0,1)][cellID.slice(1,2)] = parseInt(value);
        console.log(board);
    }

    function _createTextEntry(container, i, j) {
        let text = document.createElement("input");
        text.setAttribute("type", "text");
        text.setAttribute("maxlength", "1");
        text.setAttribute("size", "1");
        text.setAttribute("patter", "[1-9]")
        text.id = `${i}${j}`;
        text.className = "sudoku-input";
        container.appendChild(text);
    }
    
    return {
        createGrid,
        renderNumbers,
        updateBoard
    }

})();

module.exports = Display;