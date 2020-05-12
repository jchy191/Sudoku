import GameFlow from './GameFlow';
import Display from './Display';


document.getElementById("new-game-easy").addEventListener("click", function(){
    GameFlow.newGame("easy");
    Display.setVisibility(".menu-screen", false);
    Display.setVisibility(".game-screen", true);
})

document.getElementById("new-game-medium").addEventListener("click", function(){
    GameFlow.newGame("med");
    Display.setVisibility(".menu-screen", false);
    Display.setVisibility(".game-screen", true);
})

document.getElementById("new-game-hard").addEventListener("click", function() {
    GameFlow.newGame("hard");
    Display.setVisibility(".menu-screen", false);
    Display.setVisibility(".game-screen", true);
})

document.getElementById("main-menu-button").addEventListener("click", function(){
    Display.setVisibility(".menu-screen", true);
    Display.setVisibility(".game-screen", false);
})

document.getElementById("reset-button").addEventListener("click", GameFlow.resetBoard);

document.getElementById("undo-button").addEventListener("click", GameFlow.undoInput);