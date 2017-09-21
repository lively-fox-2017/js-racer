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
var player = 'ABCD'
var js = new JSRacer(player, 60)
js.historys()
while(js.finished() === 'FINISH'){
  console.log(js.print_board())
  sleep(250)
}