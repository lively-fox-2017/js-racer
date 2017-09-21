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
let game = new JSRacer(['a','b','c','d'], 50);
game.print_board()
sleep(700);
while(game.finished()==false){
  for (let indexP in game.players){
    game.advanced_player(game.players[indexP].name, game.players.a.position);
    game.print_board();
    sleep(700);
    if (game.finished()){
      break
    }
  }

}
