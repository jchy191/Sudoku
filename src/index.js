const Display = require('./Display');
const Puzzle = require('./Puzzle');

//const grid = document.getElementById("grid");


const newGame = (() => {

const solution = Puzzle.createPuzzle();
const board = Puzzle.createBlanks(solution);

const grid = document.getElementById("grid");
Display.createGrid(grid);
Display.renderNumbers(board);


let cells = [...document.querySelectorAll(".sudoku-input")];
cells.forEach(cell => {
    cell.addEventListener("input", function(){
        if (!cell.value) 
            Display.updateBoard(board, 0, cell.id);
        if (/[1-9]/.test(cell.value)) 
            Display.updateBoard(board, cell.value, cell.id);
        if (/\D/.test(cell.value) || cell.value == 0) 
            cell.value = "";
        //the position of the input cell is stored in cell.id as a String 
    })
})



})();