import GameFlow from './GameFlow';
import Display from './Display';
import $ from 'jquery';


$("#new-game-easy").mousedown(function() {
    GameFlow.newGame("easy");
    Display.setVisibility(".menu-screen", false);
    Display.setVisibility(".game-screen", true);
})

$("#new-game-medium").mousedown(function() {
    GameFlow.newGame("med");
    Display.setVisibility(".menu-screen", false);
    Display.setVisibility(".game-screen", true);    
})

$("#new-game-hard").mousedown(function() {
    Display.setVisibility(".menu-screen", false);
    Display.setVisibility(".loading-screen", true);
   
    let generatingPuzzle = setInterval(function(){
        GameFlow.newGame("hard");
        if ($(".game-board").children().length > 0) {
            Display.setVisibility(".game-screen", true);
            Display.setVisibility(".loading-screen", false);
            clearInterval(generatingPuzzle);
        }
    }, 100);
})

$("#main-menu-button").mousedown(function(){
    Display.setVisibility(".menu-screen", true);
    Display.setVisibility(".game-screen", false);
    Display.setVisibility(".win-screen", false);
    Display.clearBoard();
})

$("#reset-button").mousedown(function(){
    Display.setVisibility(".win-screen", false)
    GameFlow.resetBoard()
})

$("#undo-button").mousedown(function(){
    GameFlow.undoInput()
});

$("#hints-button").mousedown(function(){
    GameFlow.giveHint()
});