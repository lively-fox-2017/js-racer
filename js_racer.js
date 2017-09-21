"use strict"

const Dice = require('./dice');

class JSRacer {
  constructor(players, length) {
    this.players=[{name:'A', pos:0},{name:'B',pos:0},{name:'C',pos:0}];
    this.length=length ||20
    this.finish =false;
  }
  print_board() {
    for(let i=0;i<this.players.length;i++){
      if(this.finish==false){
        this.print_line(this.players[i]);
        this.advanced_player(this.players[i]);
      }else{
        break;
        return this
      }
    }
  }
  print_line(player, pos) {
    var arr=[]
    for(let i=0;i<this.length;i++){
      if(player.pos ==i){
        arr.push(player.name)
      }else{
        arr.push(' ')
      }
    }
    console.log(arr.join('|'));
  }
  advanced_player(player) {
    var dice= new Dice()
    player.pos +=dice.roll()
    if(player.pos>this.length){
      console.log(`Player ${player.name} is Winner`);
      this.finish=true
    }
  }
  finished() {

  }
  winner() {

  }
  reset_board() {
    console.log("\x1B[2J")
  }
}

module.exports = JSRacer;
