"use strict"

const Dice = require('./dice');

class JSRacer {
  constructor(players, length) {
    //players bentuknya array
    //length adalah panjang dari lintasan
    this.players = {};
    for (let player of players) {
      this.players[player]={};
      this.players[player].name=player;
      this.players[player].position=0;
    }
    this.length = length;
    this.isFinished = false;
  }
  print_board() {
    //print total board
    //panggil method print_line
    let board='';
    for (let index in this.players) {
      board+='\n'+this.print_line(this.players[index].name, this.players[index].position);
    }
    console.log( "\x1B[2J", board);
  }
  print_line(player, pos) {
    //print per line
    let track = '';
    for (var i=0; i<=this.length; i++){
      if (i!=pos){
        track+=' |';
      }else{
        track+=`${player}|`;
      }
    }
    return track;
  }
  advanced_player(player) {
    //kocok dadu dan ganti posisi
    let stepAdded = new Dice().roll();
    if (this.players[player].position+stepAdded<this.length){
      this.players[player].position+= stepAdded;
    }else{
      this.players[player].position= this.length;
      this.isFinished = true;
    }
  }
  finished() {
    //hentikan game jika finished
    return this.isFinished;
  }
  winner() {
    //winner adalah  player yang sampai pada length
    for (let nama in this.players) {
      if (this.players[nama].position==this.length){
        return this.players[nama].name;
      }
    }
    return 'No winner yet';
  }
  reset_board() {
    console.log("\x1B[2J")
  }
}
//console.log(new Dice().roll());
module.exports = JSRacer;
