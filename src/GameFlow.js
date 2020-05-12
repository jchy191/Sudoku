import Display from './Display'
import Puzzle from './Puzzle'
import Solver from './Solver'
import _ from 'lodash';


const GameFlow = (() => {

    let solution;
    let initialBoard;
    let currentBoard;
    let movesHistory = [];

    function newGame(difficulty) {
        if (difficulty === "easy" || difficulty === "med") {        
            solution = Puzzle.createPuzzle();
            initialBoard = Puzzle.createBlanks(solution, difficulty);
        }

        if (difficulty === "hard") {
            initialBoard = Puzzle.createHardPuzzle();
            solution = Solver.generatesSolutions(initialBoard).pop();
        }

        resetBoard();
    }

    function resetBoard() {
        currentBoard = _.cloneDeep(initialBoard);
        movesHistory = [];

        const grid = document.querySelector(".game-board");
        grid.innerHTML="";
        Display.createGrid(grid);
        Display.renderNumbers(currentBoard);
        Display.resetClashingCells();

        let inputBoxes = [...document.querySelectorAll(".sudoku-input")];
        inputBoxes.forEach(inputBox => {
            inputBox.addEventListener("input", function(){
                inputEntered(inputBox);
            })
        })     
    }

    function inputEntered(inputBox) {
        
        let row = parseInt(inputBox.id.slice(0,1));
        let col = parseInt(inputBox.id.slice(1,2));

        Display.resetClashingCells();

        if (inputBox.value === "") {
            movesHistory.push([row, col, currentBoard[row][col]]);
            currentBoard[row][col] = 0;
            return;
        }

        if (/\D/.test(inputBox.value) || inputBox.value === 0) {
            inputBox.value = "";
            return;
        }
        
        let clashes = Solver.findClashes(currentBoard, row, col, parseInt(inputBox.value));

        if (clashes.length !== 0) {
            inputBox.value = "";
            Display.highlightClashingCells(clashes);
            return;
        }
        movesHistory.push([row, col, currentBoard[row][col]]);
        currentBoard[row][col] = parseInt(inputBox.value);
        
        if (_checkWin(currentBoard)) {
            _gameWon();
        }
        

    }

    function undoInput() {
        if (movesHistory.length === 0) return;

        Display.resetClashingCells();
        let lastMove = movesHistory.pop();
        let [row, col, value] = lastMove;
        currentBoard[row][col] = value;

        let cells = [...document.querySelectorAll(".small-grid-box")];
        if (value === 0) 
            cells[row * 9 + col].lastChild.value = "";
        if (value !== 0) 
            cells[row * 9 + col].lastChild.value = value;
    }

    function giveHint() {
        Display.resetClashingCells();

        let emptySpots = [];
        for (let i = 0; i < 9; i++)
            for (let j = 0; j < 9; j++)
                if (currentBoard[i][j] === 0)
                    emptySpots.push({row: i, col: j, value: solution[i][j]})
        
        if (emptySpots.length === 0) return;

        let hint = emptySpots[Math.floor(Math.random() * emptySpots.length)];
        currentBoard[hint.row][hint.col] = hint.value;

        let cells = [...document.querySelectorAll(".small-grid-box")];
        cells[hint.row * 9 + hint.col].lastChild.value = hint.value;

        if (_checkWin(currentBoard)) {
            _gameWon();
        }
    }   

    return {
        newGame,
        resetBoard,
        inputEntered,
        undoInput,
        giveHint
    }

    function _checkWin(board){
        for (let i = 0; i < 9; i++) 
            for (let j = 0; j < 9; j++) 
                if (board[i][j] == 0) return false
        return true;
    }

    function _gameWon() {
        Display.gameWon();

        const grid = document.querySelector(".game-board");
        grid.innerHTML="";
        Display.createGrid(grid);
        Display.renderNumbers(currentBoard);

        movesHistory = [];
    }

})();


export default GameFlow;