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

let aktor = ['a','b','c'];
let di = new JSRacer(aktor,20);
di.print_board()
while(true){
  if (di.finished()){
    console.log(di.winner());
    break;
  }
  for(let i = 0; i < aktor.length; i++){
    sleep(200)
    di.advanced_player(i)
    di.reset_board()
    sleep(200)
    console.log(di.updateBoard())
    if (di.finished()){
      //console.log(di.winner());
      break;
    }
  }

  //console.log(di.finished())
}
