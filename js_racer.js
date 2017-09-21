"use strict"
// Override Array prototype
Array.prototype.multiIndexOf = function(el) {
  var idxs = [];
  for (var i = this.length - 1; i >= 0; i--) {
    if (this[i] === el) {
      idxs.unshift(i);
    }
  }
  return idxs;
};

const Dice = require('./dice');

class JSRacer {
  constructor(players, length) {
    this.players = [];
    this.position = [];
    this.length = length;
    this.isFinished = false;
    this.winnerArr = [];
    this.dice = new Dice();
    // Initialize player
    for (var i = 0; i < players; i++) {
      this.players.push(String.fromCharCode(65 + i));
      this.position.push(0);
    }
  }
  play() {
    if (this.players.length > 26) {
      console.log('Maximum allowed players are 26 players');
      this.isFinished = true;
      return 0;
    }
    this.print_board()
    for (let i = 0; i < this.players.length; i++) {
      this.advanced_player(i)
    }
    // IF there is/are winner
    if (this.position.indexOf(this.length) !== -1) {
      this.finished();
      // Print last position
      this.print_board()
      this.winner();
    }
  }
  print_board() {
    this.reset_board();
    for (var i = 0; i < this.players.length; i++) {
      this.print_line(i, this.position[i]);
    }
  }
  print_line(player, pos) {
    let line = ' ';
    for (let i = 0; i < this.length; i++) {
      if (i === pos) {
        line += this.players[player] + ' | ';
      } else {
        line += '  | ';
      }
    }
    // Last Line doesnt use '|'
    if (pos === this.length) {
      line += this.players[player];
    }
    console.log(line);
  }
  advanced_player(player) {
    // Roll the dice
    let speed = this.dice.roll();
    if (this.position[player] + speed < this.length)
      this.position[player] += speed;
    else // IF overlaping finish line
      this.position[player] = this.length;
  }
  finished() {
    this.isFinished = true;
  }
  winner() {
    // Get the winners
    this.winnerArr = this.position.multiIndexOf(this.length);
    let winnerName = '';
    // String of winners name
    for (let i = 0; i < this.winnerArr.length; i++) {
      if (i === this.winnerArr.length - 2)
        winnerName += "'" + this.players[this.winnerArr[i]] + "'" + ' & ';
      else if (i === this.winnerArr.length - 1)
        winnerName += "'" + this.players[this.winnerArr[i]] + "'" + ' ';
      else
        winnerName += "'" + this.players[this.winnerArr[i]] + "'" + ', ';
    }
    // IF there is only single winner
    if (this.winnerArr.length === 1)
      console.log("Player " + winnerName + "is the winner");
    else // Else then draw
      console.log("Player " + winnerName + "are draw. Go play again :)");
  }
  reset_board() {
    console.log("\x1B[2J")
  }
}

module.exports = JSRacer;
