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
let test = new JSRacer(26, 40);
test.print_board();
while (test.status) {
  sleep(300);
  for (var i = 0; i < test.players; i++) {
    test.advanced_player(i);
  }
  test.print_board();
}
