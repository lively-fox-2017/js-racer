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
var balap = new JSRacer(['a', 'b'], 30)
while(balap.lanjut) {
  sleep(900)
  balap.print_board()
  balap.advanced_player(0)
  balap.advanced_player(1)
  balap.print_board()
  console.log(balap.winner());
}
