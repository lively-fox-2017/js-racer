"use strict"

const JSRacer = require('./js_racer')
let data = new JSRacer(5, 30);
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds) {
      break;
    }
  }
}


// console.log(data.jalur);
// console.log(data.status);
// data.advanced_player();
// data.print_line();

while (data.finished() === false) {
  data.reset_board();
  data.print_board();
sleep(500);
}
data.winner();

// Your code here...
// var balap = new JSRacer(['a', 'b', 'c'], 30)
// sleep(900)
// balap.print_board()
// while(balap.lanjut) {
//   sleep(900)
//   for(var i = 0; i < balap.pemain.length; i++) {
//     balap.advanced_player(i)
//   }
//   //balap.advanced_player(0)
//   //balap.advanced_player(1)
//   //balap.advanced_player(2)
//   //balap.advanced_player(3)
//   balap.print_board()
//   console.log(balap.winner());
// }