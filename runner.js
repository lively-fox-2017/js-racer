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

//Your code here...
let player = "bany"
let racer = new JSRacer(player, 30)

//console.log(racer.print_line(player));
racer.histori()
while (racer.finished() == true) {
console.log(racer.print_board());
sleep(500)
}
