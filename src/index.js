const Display = require('./Display');
const Puzzle = require('./Puzzle');
const Solver = require('./Solver');


const gameFlow = (() => {

    let solution;
    let initialBoard;
    let board;

    function newGame() {
        solution = Puzzle.createPuzzle();
        initialBoard = Puzzle.createBlanks(solution);
        board = JSON.parse(JSON.stringify(initialBoard));

        resetBoard();
           
    }

    function resetBoard() {
        board = JSON.parse(JSON.stringify(initialBoard));
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
            board[row][col] = 0;
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
    }



    return {
        newGame,
        resetBoard,
        inputEntered
    }

})();


const menuButtons = (() => {

    document.getElementById("new-game-button").addEventListener("click", function(){
        document.querySelector(".menu-screen").style.display = "none";
        document.querySelector(".game-screen").style.display = "block";
        gameFlow.newGame();
    })

    document.getElementById("main-menu-button").addEventListener("click", function(){
        document.querySelector(".menu-screen").style.display = "block";
        document.querySelector(".game-screen").style.display = "none";
    })

    document.getElementById("reset-button").addEventListener("click", gameFlow.resetBoard);

})();