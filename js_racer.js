"use strict"

const Dice = require('./dice');

class JSRacer {
  constructor(players, length) {
    this.length = length;
    this.raceFinished = false;
    this.players = players;
    this.playersPos = this.generateFirstPlayerPos(this.players.length);
  }
  generateFirstPlayerPos(number){
    var temp = [];
    for(var i =0;i<number;i++){
      temp.push(0);
    }
    return temp;
  }
  print_board() {
    this.reset_board();
    var board = "";
    for(var i =0;i<this.players.length;i++){
      board += this.print_line(this.players[i],this.playersPos[i]);
    }
    return board;
  }
  print_line(player, pos) {
    var line = "";
    for(var i=0;i<this.length;i++){
      if(i === pos){
        line += `${player}|`;
      }
      else{
        line += " |";
      }
    }
    return line+"\n";
  }
  advanced_player(player) {
    var dice = new Dice();
    var rollResult = dice.roll();
    this.playersPos[player] += rollResult;
    if(this.playersPos[player] >= this.length-1){
      this.playersPos[player] = this.length-1;
      this.raceFinished = true;
    }
  }
  finished() {
    return this.raceFinished;
  }
  winner() {
    var winner = this.playersPos.indexOf(this.length-1);
    return `The winner is ${this.players[winner]}`;
  }
  reset_board() {
    console.log("\x1B[2J")
  }
}

module.exports = JSRacer;
