"use strict"

const JSRacer = require('./js_racer')

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds) {
      break;
    }
  }
}

// Your code here...
var newRace = new JSRacer(['A','B','C'], 20);
while(true){
  if(!newRace.finished()){
    console.log(newRace.print_board());
    for(var i=0;i<newRace.players.length;i++){
      newRace.advanced_player(i);
      if(newRace.playersPos[i] >= newRace.length-1){
        newRace.playersPos[i] = newRace.length;
        newRace.raceFinished = true;
        break;
      }
    }
    sleep(2000);
  }
  else{
    console.log(newRace.print_board());
    console.log(newRace.winner());
    sleep(2000)
    break;
  }
}
