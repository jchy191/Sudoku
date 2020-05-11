const Display = require('./Display');
const Puzzle = require('./Puzzle');
const Solver = require('./Solver');


const gameFlow = (() => {

    let solution;
    let initialBoard;
    let board;

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

    document.getElementById("new-game-hard").addEventListener("click", function(){
        gameFlow.newGame("hard");
        setVisibility(".menu-screen", false);
        setVisibility(".game-screen", true);
    })

    document.getElementById("main-menu-button").addEventListener("click", function(){
        setVisibility(".menu-screen", true);
        setVisibility(".game-screen", false);
    })

    document.getElementById("reset-button").addEventListener("click", gameFlow.resetBoard);

})();