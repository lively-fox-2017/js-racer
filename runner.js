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

let play = new JSRacer(10,50) ;

play.advanced_player();
while (play.finished()==false) {
  play.print_board()
  sleep(500)
}
play.winner()
