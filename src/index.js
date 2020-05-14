import GameFlow from './GameFlow';
import Display from './Display';
import $ from 'jquery';
import Stopwatch from 'timer-stopwatch'

let stopwatch = new Stopwatch(0,{refreshRateMS: 1000, almostDoneMS: 0});
stopwatch.onTime(function(time){
    let min = Math.floor(time.ms / 60000);
    let sec = Math.floor(time.ms / 1000) - min * 60;
    if (sec.toString().length == 1)
        sec = "0" + sec;
    $("#clock").text(`${min}:${sec}`);
})

$("#new-game-easy").mousedown(function() {
    GameFlow.newGame("easy");
    Display.setVisibility(".menu-screen", false);
    Display.setVisibility(".game-screen", true);
    stopwatch.start();
})

$("#new-game-medium").mousedown(function() {
    GameFlow.newGame("med");
    Display.setVisibility(".menu-screen", false);
    Display.setVisibility(".game-screen", true);  
    stopwatch.start();  
})

$("#new-game-hard").mousedown(function() {
    Display.setVisibility(".menu-screen", false);
    Display.setVisibility(".loading-screen", true);
   
    let generatingPuzzle = setInterval(function(){
        GameFlow.newGame("hard");
        if ($(".game-board").children().length > 0) {
            Display.setVisibility(".game-screen", true);
            Display.setVisibility(".loading-screen", false);
            stopwatch.start();
            clearInterval(generatingPuzzle);
        }
    }, 100);
})

$("#main-menu-button").mousedown(function(){
    Display.setVisibility(".menu-screen", true);
    Display.setVisibility(".game-screen", false);
    Display.setVisibility(".win-screen", false);
    Display.clearBoard();
    stopwatch.stop();
    stopwatch.reset();
    $("#clock").text("0:00");
})

$("#reset-button").mousedown(function(){
    Display.setVisibility(".win-screen", false)
    GameFlow.resetBoard();
    stopwatch.stop();
    stopwatch.reset();
    $("#clock").text("0:00");
    stopwatch.start();
})

$("#undo-button").mousedown(function(){
    GameFlow.undoInput();
});

$("#hints-button").mousedown(function(){
    GameFlow.giveHint();
});
