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
  generateBomb(){
    return [19,4,13];
  }
  generatePowerUp(){
    return [1,12];
  }
  print_board() {
    this.reset_board();
    var board = "";
    for(var i =0;i<this.players.length;i++){
      if(this.generateBomb().indexOf(this.playersPos[i])!==-1){
        this.playersPos[i] -= 2;
        console.log(this.players[i] + " got BOMB! 2 move backwards");
      }
      else if(this.generatePowerUp().indexOf(this.playersPos[i])!==-1){
        this.playersPos[i] += 8;
        console.log(this.players[i] + " got POWER UP ! 8 move forwards");
      }
      board += this.print_line(this.players[i],this.playersPos[i]);
    }
    return board;
  }
  print_line(player, pos) {
    var line = "";
    for(var i=0;i<=this.length;i++){
      if(i === pos){
        line += `|${player}`;
      }
      else if(this.generateBomb().indexOf(i) !== -1){
        line += `|*`;
      }
      else if(this.generatePowerUp().indexOf(i) !== -1){
        line += '|o'
      }
      else{
        line += "| ";
      }
    }
    return line+"\n";
  }
  advanced_player(player) {
    var dice = new Dice();
    var rollResult = dice.roll();
    this.playersPos[player] += rollResult;
    console.log(this.players[player]+" Roll a dice : "+rollResult);
  }
  finished() {
    return this.raceFinished;
  }
  winner() {
    var winner = this.playersPos.indexOf(this.length);
    return `The winner is ${this.players[winner]}`;
  }
  reset_board() {
    console.log("\x1B[2J")
  }
}

module.exports = JSRacer;
