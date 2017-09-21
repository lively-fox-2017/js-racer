"use strict"

const Dice = require('./dice');

class JSRacer {
  constructor(players, length) {
    this.players = players;
    this.length = length;
    this.playersPositions = [];
    this.line = '';

    // Generate players positions
    for (let i = 0; i < players.length; i++) {

      this.playersPositions.push(1);

    }
  }

  // print_board() {

  //   console.log(this.board);

  // }

  print_line() {

    let dice = new Dice;

    this.line = '';

    for (let i = 0; i < this.players.length; i++) {

      let newPos = 1;

      if (!this.finished()) {
        newPos = this.playersPositions[i] + dice.roll();
      } else {
        newPos = this.playersPositions[i];
      }

      if (newPos >= this.length) {

        this.playersPositions[i] = this.length;

      } else {

        this.playersPositions[i] = newPos;

      }

      for (let j = 1; j <= this.length; j++) {

        if (j === this.playersPositions[i])
          this.line += '|'+ this.players[i];
        else
          this.line += '| ';

      }

      this.line += '\n';

    }

    console.log(this.line);

  }

  // advanced_player(player) {

  // }

  finished() {

    return this.playersPositions.indexOf(this.length) !== -1 ? true : false;

  }

  winner() {

    console.log('Player \'' + this.players[this.playersPositions.indexOf(this.length)] + '\' is the winner');

  }

  reset_board() {
    process.stdout.write("\x1Bc")
  }

}


module.exports = JSRacer;
