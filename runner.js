"use strict"
const JSRacer = require('./jsracer')
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds) {
      break;
    }
  }
}

// Your code here...
let player = ['A','B','C','D','E'];
let test = new JSRacer(player, 30);
test.jebakanBatman()
// console.log(test.trap);
while (test.finished() === false) {
  console.log('----------------------------TRACK RACER--------------------------------');
  console.log(test.print_board());
  sleep(1000);
}
// tampilin print boardnya
console.log(test.print_board());
//tampilin pemenang
console.log(test.pemenang());
