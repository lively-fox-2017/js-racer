"use strict"

const Dice = require('./dice');

class JSRacer {
  constructor(players, length) {
    this.players = players;
    this.length = length;
    this.playersPositions = [];
    this.line = '';
    this.traps = [];
    this.died = [];

    // Generate players positions
    for (let i = 0; i < this.players.length; i++) {

      this.playersPositions.push(1);

    }

    // Generate traps
    for (let i = 0; i < this.players.length; i++) {

      this.traps.push( Math.floor( Math.random() * (this.length - 3) + 3 ) );

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

        if (j === this.traps[i])
          this.line += '|#';

        if (j === this.playersPositions[i]) {

          this.line += '|'+ this.players[i];

        } else {

          this.line += '| ';

        }

        if (this.playersPositions[i] === this.traps[i]) {
          this.died.push(this.players[i]);
          this.players.splice(i, 1);
          this.playersPositions.splice(i, 1);
        }

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

  get_died () {

    // Break
    console.log('');

    if (this.died.length) {

      for (let i = 0; i < this.died.length; i++) {

        console.log('Player \'' + this.died[i] + '\' died! What a shame');

      }

    } else {

      console.log('No one died, nice...');

    }

  }

}


module.exports = JSRacer;
