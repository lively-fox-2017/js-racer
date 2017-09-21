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

var player = "abc"
var run = new JSRacer(player,25)

run.histori()
while (run.finished() == "FINISH") {
console.log(run.print_board());
sleep(500)
}
// Your code here...
