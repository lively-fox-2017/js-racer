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
const race = new JSRacer(['a', 'b', 'c', 'd', 'e'], 30);

while (!race.finished()) {

  race.reset_board();
  race.print_line();
  sleep(200);

}

race.winner();

console.log(race.playersPositions);
