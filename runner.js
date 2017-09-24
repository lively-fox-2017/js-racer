'use strict'

const JSRacer = require('./js_racer');

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds) {
      break;
    }
  }
}

// Your code here...
let racer = new JSRacer(3, 40);
while (racer.finished() == false) {
  racer.print_board();
  sleep(3000);
}
racer.reset_board();
racer.winner();
