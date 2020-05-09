const Display = require('./Display');
const Puzzle = require('./Puzzle');
const Solver = require('./Solver');


const gameFlow = (() => {

    let solution = Puzzle.createPuzzle();
    //console.log(solution);
    let board = Puzzle.createBlanks(solution);
    //console.log(solution);

    const grid = document.getElementById("grid");
    Display.createGrid(grid);
    Display.renderNumbers(board);


    let inputBoxes = [...document.querySelectorAll(".sudoku-input")];
    inputBoxes.forEach(inputBox => {
        inputBox.addEventListener("input", function(){
            inputEntered(inputBox);
        })
    })

    function inputEntered(inputBox) {
        
        let row = inputBox.id.slice(0,1);
        let col = inputBox.id.slice(1,2);

        Display.resetClashingCells();

        if (inputBox.value == "") {
            board[row][col] = 0;
            console.log(board);
            return;
        }

        if (/\D/.test(inputBox.value) || inputBox.value == 0) {
            inputBox.value = "";
            return;
        }
        
        let clashes = Solver.findClashes(board, row, col, parseInt(inputBox.value));

        if (clashes.length != 0) {
            inputBox.value = "";
            Display.highlightClashingCells(clashes);
            return;
        }

        board[row][col] = parseInt(inputBox.value);
        console.log(board);
    }

})();