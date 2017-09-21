"use strict"

const Dice = require('./dice');

class JSRacer {
  constructor(players, length) {
    this.players = players;
    this.length = length;
    this.board = [];
    this.champion = '';
    this.win = false;
    this.isFinished = false;
  }

  print_board() {
    for (let i = 0; i < this.players; i++) {
      this.board[i] = [];
      for (let j = 0; j < this.length; j++) {
        if (j === 0) {
          this.board[i][j] = String.fromCharCode(65 + i);
        }else if (j % 2 === 0 && j !== 0) {
          this.board[i][j] = ' ';
        }else {
          this.board[i][j] = '|';
        }
      }
    }

    for (let i = 0; i < this.players; i++){
      let path = '';
      for (let j = 0; j<this.length; j++){
        path += this.board[i][j];
      }
      console.log(path);
    }
  }

  print_line() {
    for(let i = 0; i < this.players; i++) {
      let dice = new Dice();
      let diceRoll = dice.roll();
      for (let j = 0; j < this.length; j++) {
        if(this.board[i][j] !== '|' && this.board[i][j] !== ' ') {

          if((j + diceRoll) >= this.length - 2) {
            this.champion = this.board[i][j];
            let temp = this.board[i][this.length - 2];
            this.board[i][this.length - 2] = this.board[i][j];
            this.board[i][j] = temp;
            break;
          } else {
            let newJ = j + (2 * diceRoll);
            if(newJ > 98) {
              newJ = 98;
            }

            let temp = this.board[i][newJ]
            this.board[i][newJ] = this.board[i][j];
            this.board[i][j] = temp;
            break;
          }
        }
      }

      if(this.board[i][this.length - 2] !== '|' && this.board[i][this.length-2] !== ' ') {
        this.champion = this.board[i][this.length - 2];
        this.win = true;
      }
    }

    for(let i = 0; i < this.players; i++) {
      let path = '';
      for (let j = 0; j < this.length; j++) {
        path += this.board[i][j];
      }

      console.log(path);

      // this.reset_board();
    }
  }

  advanced_player(player) {
    this.print_board();
    do {
      this.reset_board();
      this.print_line();
    } while (this.win !== true);
    this.winner();
  }

  finished() {
    return this.isFinished;
  }

  winner() {
    console.log('Player ' + this.champion + ' has win the game');
  }

  reset_board() {
    console.log('\x1B[2J');
  }
}

// let racer = new JSRacer(3, 40);
// racer.print_board();

module.exports = JSRacer;
