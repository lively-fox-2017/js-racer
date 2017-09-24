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

// Your code here..
let race = new JSRacer(2, 40);
while (race.finished() == false) {
race.print_board();
  sleep(3000);
}
race.winner();
