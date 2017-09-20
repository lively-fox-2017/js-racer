"use strict"

const Dice = require('./dice');

class JSRacer {
  constructor(players, length) {
    this.players =players ;
    this.length  =length ;
    this.player = [];
    this.pos = [];
    this.finish=false;
    this.champ ='';
  }
  print_board() {
    this.reset_board ()

    for (let i=0 ; i < this.players ;i++){
      this.print_line(this.player[i],this.pos[i] )
      if(this.pos[i]==this.length-1 && this.champ=='' ){
        this.finish=true
        this.champ= this.player[i]
      }
    }
    dadu.roll(this.players)
    for (let i=0 ; i < this.players ;i++){ //acak langkah
      if(this.pos[i] + dadu.move[i]>=this.length){ //berhenti di finish
        this.pos[i]=this.length-1
      }
      else{
        this.pos[i] += dadu.move[i]
      }
    }

  }
  print_line(player, pos) {
    let line=''
    for (let i=0 ; i < this.length ; i++){
      if (i==pos) {
        line+= '|'+ player
      }
      else{
        line+= '| '
      }
    }
    console.log(line);
  }
  // advanced_player(player) {
  advanced_player() {
    for (let i=0 ; i < this.players ;i++){
      this.player.push(String.fromCharCode(97+i))
      this.pos.push(0)
    }
  }
  finished() {
    return this.finish
  }
  winner() {
    console.log('Player \'' , this.champ , '\' is the winner')
  }
  reset_board() {
    console.log("\x1B[2J")
  }
}

let dadu = new Dice ;

module.exports = JSRacer;
