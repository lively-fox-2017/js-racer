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

let runner =new JSRacer()
runner.reset_board()

for(var i=0;i<6;i++){
  runner.print_board()
  sleep(1000)
  runner.reset_board
}
// Your code here...
