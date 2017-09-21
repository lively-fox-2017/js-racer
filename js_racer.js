"use strict"

const Dice = require('./dice');

class JSRacer {
  constructor(players, length) {
    this.player=players;
    this.length=length;
    this.pos_player=[];
    for(let i=0;i<this.player.length;i++){
      this.pos_player.push(0);
    }
  }
  print_board(){
    let dice=new Dice();
    for(let pos=0;pos < this.player.length;pos++){
      this.pos_player[pos]+=dice.roll();
      let status = this.finished(this.pos_player[pos],this.length)
      if(status){
        this.pos_player[pos]=24;
        this.winner(this.player[pos])
        return -1
      }
    }
    this.reset_board();
    for(let i=0;i<this.player.length;i++){
      this.print_line(this.player[i],this.pos_player[i]);
    }
  }
  print_line(player, pos){
    let line='';
    for(let i=0;i<this.length;i++){
      if(i == pos){
        line+=player+'|';
      }else{
        line+=' |';
      }
    }
    console.log(line);
  }
  advanced_player(player){

  }
  finished(player_pos,len) {
    while(player_pos >= len){
      if(player_pos >= len){
        return true
      }        
    }
  }
  winner(player) {
    this.reset_board();
    for(let i=0;i<this.player.length;i++){
      this.print_line(this.player[i],this.pos_player[i]);
    }
    console.log('Player '+player+' Winner')
  }
  reset_board() {
    console.log("\x1B[2J")
  }
}
module.exports = JSRacer;
