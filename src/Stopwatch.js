import $ from 'jquery';
import Stopwatch from 'timer-stopwatch';

let stopwatch = new Stopwatch(0,{refreshRateMS: 1000, almostDoneMS: 0});

stopwatch.onTime(function(time){
    let min = Math.floor(time.ms / 60000);
    let sec = Math.floor(time.ms / 1000) - min * 60;
    if (sec.toString().length == 1)
        sec = "0" + sec;
    $("#clock").text(`${min}:${sec}`);
})

export default stopwatch;