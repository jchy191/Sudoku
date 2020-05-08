const Display = require('./Display');
const Puzzle = require('./Puzzle');

//const grid = document.getElementById("grid");


//newgame




const newGame = (() => {

const currentBoard = Puzzle.createPuzzle();

const grid = document.getElementById("grid");
Display.createGrid(grid);
Display.renderNumbers(currentBoard);

})();