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
var balap = new JSRacer(['a', 'b', 'c', 'd'], 30)
while(balap.lanjut) {
  sleep(900)
  for(var i = 0; i < balap.pemain.length; i++) {
    balap.advanced_player(i)
  }
  //balap.advanced_player(0)
  //balap.advanced_player(1)
  //balap.advanced_player(2)
  //balap.advanced_player(3)
  balap.print_board()
  console.log(balap.winner());
}
