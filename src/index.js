const Display = require('./Display');
const Puzzle = require('./Puzzle');

//const grid = document.getElementById("grid");


//newgame




const newGame = (() => {

const solution = Puzzle.createPuzzle();
const board = Puzzle.createBlanks(solution);

const grid = document.getElementById("grid");
Display.createGrid(grid);
Display.renderNumbers(board);

})();