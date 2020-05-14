import GameFlow from './GameFlow';
import Display from './Display';
import Stopwatch from './Stopwatch';
import $ from 'jquery';

$("#new-game-easy").mousedown(function() {
    GameFlow.newGame("easy");
    Display.setVisibility(".menu-screen", false);
    Display.setVisibility(".game-screen", true);
    Stopwatch.start();
})

$("#new-game-medium").mousedown(function() {
    GameFlow.newGame("med");
    Display.setVisibility(".menu-screen", false);
    Display.setVisibility(".game-screen", true);  
    Stopwatch.start();  
})

$("#new-game-hard").mousedown(function() {
    Display.setVisibility(".menu-screen", false);
    Display.setVisibility(".loading-screen", true);
   
    let generatingPuzzle = setInterval(function(){
        GameFlow.newGame("hard");
        if ($(".game-board").children().length > 0) {
            Display.setVisibility(".game-screen", true);
            Display.setVisibility(".loading-screen", false);
            Stopwatch.start();
            clearInterval(generatingPuzzle);
        }
    }, 100);
})

$("#main-menu-button").mousedown(function(){
    Display.setVisibility(".menu-screen", true);
    Display.setVisibility(".game-screen", false);
    displayGameInterface();

    Display.clearBoard();
    Stopwatch.stop();
    Stopwatch.reset();
    $("#clock").text("0:00");
})

$("#pause-button").mousedown(function(){
    Stopwatch.stop();
    Display.setVisibility(".game-container", false);
    Display.setVisibility("#pause-button", false);
    Display.setVisibility("#reset-button", true);
    Display.setVisibility("#undo-button", false);
    Display.setVisibility("#hints-button", false);
    Display.setVisibility("#play-button", true);
    Display.setVisibility(".pause-screen", true);
});

$("#play-button").mousedown(function(){
    Stopwatch.start();
    displayGameInterface();
});

$("#reset-button").mousedown(function(){
    GameFlow.resetBoard();
    displayGameInterface();

    Stopwatch.stop();
    Stopwatch.reset();
    $("#clock").text("0:00");
    Stopwatch.start();
})

$("#undo-button").mousedown(function(){
    GameFlow.undoInput();
});

$("#hints-button").mousedown(function(){
    GameFlow.giveHint();
});

function displayGameInterface() {
    Display.setVisibility("#pause-button", true);
    Display.setVisibility("#play-button", false);
    $("#reset-button").css("display", "inline-block");
    $("#undo-button").css("display", "inline-block");
    $("#hints-button").css("display", "inline-block");
    $(".game-container").css("display", "grid");

    Display.setVisibility(".win-screen", false);
    Display.setVisibility(".pause-screen", false);
}