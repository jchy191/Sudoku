import Display from './Display';
import Puzzle from './Puzzle';
import Solver from './Solver';
import Stopwatch from './Stopwatch';
import _ from 'lodash';


const GameFlow = (() => {

    let solution;
    let initialBoard;
    let currentBoard;
    let movesHistory = [];

    function newGame(difficulty) {

        solution = Puzzle.createPuzzle();
        initialBoard = Puzzle.createBlanks({solution: solution, difficulty: difficulty});

        resetBoard();
    }

    function resetBoard() {
        currentBoard = _.cloneDeep(initialBoard);
        movesHistory = [];

        Display.clearBoard();
        Display.createGrid();
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
            movesHistory.push({row: row, col: col, value: currentBoard[row][col]});
            currentBoard[row][col] = 0;
            return;
        }

        if (/\D/.test(inputBox.value) || inputBox.value === "0") {
            inputBox.value = "";
            return;
        }
        
        let clashes = Solver.findClashes({board: currentBoard, row: row, col: col, value: parseInt(inputBox.value)});

        if (clashes.length !== 0) {
            inputBox.value = "";
            Display.highlightClashingCells(clashes);
            return;
        }
        movesHistory.push({row: row, col: col, value: currentBoard[row][col]});
        currentBoard[row][col] = parseInt(inputBox.value);
        if (_checkWin()) {
            _gameWon();
        }
    }

    function undoInput() {
        if (movesHistory.length === 0) return;

        Display.resetClashingCells();
        
        let cells = [...document.querySelectorAll(".small-grid-box")];
        let lastMove;
        
        /*Checks that the "last move" obtained from movesHistory has not been corrected by a hint (i.e. the last 
        move is not equal to solution & the relevant cell is still a normal input box) */
        do {
            lastMove = movesHistory.pop();
            if (movesHistory.length === 0) return;

        } while (currentBoard[lastMove.row][lastMove.col] === solution[lastMove.row][lastMove.col] &&
             !(cells[lastMove.row * 9 + lastMove.col].lastChild.classList.contains("sudoku-input")))
        
        currentBoard[lastMove.row][lastMove.col] = lastMove.value;
        if (lastMove.value === 0) 
            cells[lastMove.row * 9 + lastMove.col].lastChild.value = "";
        if (lastMove.value !== 0) 
            cells[lastMove.row * 9 + lastMove.col].lastChild.value = lastMove.value;
    }

    function giveHint() {
        Display.resetClashingCells();

        let wrongSpots = [];
        for (let i = 0; i < 9; i++)
            for (let j = 0; j < 9; j++)
                if (currentBoard[i][j] !== solution[i][j])
                    wrongSpots.push({row: i, col: j, value: solution[i][j]})
                
        
        if (wrongSpots.length === 0) return;

        let hint = wrongSpots[Math.floor(Math.random() * wrongSpots.length)];
        
        currentBoard[hint.row][hint.col] = hint.value;

        Display.addHint(hint);

        if (_checkWin()) {
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

    function _checkWin(){

        for (let i = 0; i < 9; i++) {
            let set = new Set(currentBoard[i]);
            if (set.has(0)) return false;
            if (set.size !== 9) return false;
        }
        for (let j = 0; j < 9; j++) {
            let set = new Set([currentBoard[0][j], currentBoard[1][j], currentBoard[2][j],
                currentBoard[3][j], currentBoard[4][j], currentBoard[5][j],
                currentBoard[6][j], currentBoard[7][j], currentBoard[8][j]]);
            if (set.has(0)) return false;
            if (set.size !== 9) return false;
        }

        for (let i = 0; i < 9; i += 3)
            for (let j = 0; j < 9; j += 3) {
                let set = new Set([currentBoard[i][j], currentBoard[i + 1][j], currentBoard[i + 2][j],
                    currentBoard[i][j + 1], currentBoard[i + 1][j + 1], currentBoard[i + 2][j + 1],
                    currentBoard[i][j + 2], currentBoard[i + 1][j + 2], currentBoard[i + 2][j + 2]]);
                if (set.size !== 9) return false;
            }

        return true;
    }

    function _gameWon() {
        Display.gameWon();
        Stopwatch.stop();
        Display.setVisibility("#pause-button", false);
        const grid = document.querySelector(".game-board");
        grid.innerHTML="";
        Display.createGrid();
        Display.renderNumbers(currentBoard);

        movesHistory = [];
    }

})();


export default GameFlow;