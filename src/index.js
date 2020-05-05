import Display from "./Display";
import Puzzle from "./Puzzle"
//const grid = document.getElementById("grid");


//newgame




const newGame = (() => {

const currentBoard = Puzzle.createPuzzle();

const grid = document.getElementById("grid");
Display.createGrid(grid);
Display.renderNumbers(currentBoard);

})();