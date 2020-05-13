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
    GameFlow.newGame("hard");
    Display.setVisibility(".menu-screen", false);
    Display.setVisibility(".game-screen", true);
})

$("#main-menu-button").mousedown(function(){
    Display.setVisibility(".menu-screen", true);
    Display.setVisibility(".game-screen", false);
    Display.setVisibility(".win-screen", false);
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