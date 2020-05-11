const Display = require('./Display');
const Puzzle = require('./Puzzle');
const Solver = require('./Solver');


const gameFlow = (() => {

    let solution;
    let initialBoard;
    let board;
    let moves = [];

     function newGame(difficulty) {
        if (difficulty == "easy" || difficulty == "med") {        
            solution = Puzzle.createPuzzle();
            initialBoard = Puzzle.createBlanks(solution, difficulty);
        }

        if (difficulty == "hard") {
            initialBoard = Puzzle.createHardPuzzle();
            solution = Solver.generatesSolutions(initialBoard).pop();
            console.log(solution)
        }

        board = JSON.parse(JSON.stringify(initialBoard));
        
        resetBoard();
    }

    function resetBoard() {
        board = JSON.parse(JSON.stringify(initialBoard));
        moves = [];

        const grid = document.querySelector(".game-board");
        grid.innerHTML="";
        Display.createGrid(grid);
        Display.renderNumbers(board);
        Display.resetClashingCells();

        let inputBoxes = [...document.querySelectorAll(".sudoku-input")];
        inputBoxes.forEach(inputBox => {
            inputBox.addEventListener("input", function(){
                inputEntered(inputBox);
            })
        })     
    }

    function inputEntered(inputBox) {
        
        let row = inputBox.id.slice(0,1);
        let col = inputBox.id.slice(1,2);

        Display.resetClashingCells();

        if (inputBox.value == "") {
            moves.push([row, col, board[row][col]]);
            board[row][col] = 0;
            console.log("hi");
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
        moves.push([row, col, board[row][col]]);
        console.log("number");
        board[row][col] = parseInt(inputBox.value);

    }

    function undoInput() {
        if (moves.length == 0) return;

        Display.resetClashingCells();
        let lastMove = moves.pop();
        let [row, col, value] = lastMove;
        board[row][col] = value;
        console.log(board);

        let indexOfCell = parseInt(row) * 9 + parseInt(col);
        let cells = [...document.querySelectorAll(".small-grid-box")];

        if (value == 0) 
            cells[indexOfCell].lastChild.value = "";
        if (value != 0) 
            cells[indexOfCell].lastChild.value = value;
    }

    return {
        newGame,
        resetBoard,
        inputEntered,
        undoInput
    }

})();


const menuButtons = (() => {

    function setVisibility(selector, visible) {
        document.querySelector(selector).style.display = visible ? 'block' : 'none';
      }

    document.getElementById("new-game-easy").addEventListener("click", function(){
        gameFlow.newGame("easy");
        setVisibility(".menu-screen", false);
        setVisibility(".game-screen", true);
    })

    document.getElementById("new-game-medium").addEventListener("click", function(){
        gameFlow.newGame("med");
        setVisibility(".menu-screen", false);
        setVisibility(".game-screen", true);
    })
    
    document.getElementById("new-game-hard").addEventListener("click", function() {
        gameFlow.newGame("hard");
        setVisibility(".menu-screen", false);
        setVisibility(".game-screen", true);
    })

    document.getElementById("main-menu-button").addEventListener("click", function(){
        setVisibility(".menu-screen", true);
        setVisibility(".game-screen", false);
    })

    document.getElementById("reset-button").addEventListener("click", gameFlow.resetBoard);

    document.getElementById("undo-button").addEventListener("click", gameFlow.undoInput);

})();