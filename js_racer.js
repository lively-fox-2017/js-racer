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
    this.swappedLocation = Math.round(length/3);
    this.chaosLocation = Math.round(length/2);
    this.isFinished = false;
  }
  print_board() {
    //print total board
    //panggil method print_line
    let board='';
    for (let index in this.players) {
      board+='\n'+this.print_line(this.players[index].name, this.players[index].position);
    }
    this.reset_board();
    console.log(board);
    console.log(this.winner());
  }
  print_line(player, pos) {
    //print per line
    let track = '';
    for (var i=0; i<=this.length; i++){
      if (i!=pos){
        if (i== this.swappedLocation){
          track+='S|';
        }else if(i== this.chaosLocation){
          track+='*|';
        }else{
          track+=' |';
        }
      }else{
        track+=`${player}|`;
      }
    }
    return track;
  }
  isChaos(player){
    if(this.players[player].position==this.chaosLocation){
      return true;
    }
    return false;
  }
  chaos_activated(player){
    let temp;
    for (let indexPlayer in this.players){
      if(Math.round(Math.random())==1){
        this.swapped_with_next_player(player, indexPlayer);
        // temp = this.players[indexPlayer].position;
        // this.players[indexPlayer].position = this.players[playerKena].position;
        // this.players[playerKena].position = temp;
      }
    }
  }
  isSwapped(player){
    if(this.players[player].position==this.swappedLocation){
      return true;
    }
    return false;
  }
  swapped_with_next_player(player_menukar, player_ditukar) {
    let tempPos = this.players[player_menukar].position;
    this.players[player_menukar].position = this.players[player_ditukar].position;
    this.players[player_ditukar].position = tempPos;
  }
  swap_activated(playerKena){
    //random sejumlah player
    //switch player sesuai yang di random
    let temp;
    for (let indexPlayer in this.players){
      if(Math.round(Math.random())==1){
        this.swapped_with_next_player(playerKena, indexPlayer);
        break;
        // temp = this.players[indexPlayer].position;
        // this.players[indexPlayer].position = this.players[playerKena].position;
        // this.players[playerKena].position = temp;
      }
    }
  }
  advanced_player(player) {
    //kocok dadu dan ganti posisi
    let stepAdded = new Dice().roll();
    if (this.players[player].position+stepAdded<this.length){
      this.players[player].position+= stepAdded;
      if(this.isSwapped(player)){
        this.swap_activated(player);
      }
      if(this.isChaos(player)){
        this.chaos_activated(player);
      }
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
        return 'Player '+this.players[nama].name+' is the winner';
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
