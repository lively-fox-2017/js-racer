"use strict"

const Dice = require('./dice');

class JSRacer {
  constructor(players, length) {
    this.players = players;
    this.length  = length;
    this.playerData = [{playerName: 'A', position: 0},
                       {playerName: 'B', position: 0},
                       {playerName: 'C', position: 0}];
    this.gameEnd = false;
    this.winnerName = '';
  }

  print_board() {
    for (let i = 0; i < this.players; i++) {
      this.print_line(this.playerData[i].playerName, 0)
    }

  }

  print_line(player, pos) {
    let line = [];
    for (let i = 0; i<this.length; i++) {
      if (pos === i) {
        line.push(player)
      } else {
        line.push(' ')
      }
    }
    console.log(line.join('|'));
  }

  advanced_player(timer) {
    while (!this.gameEnd) {
      timer(1000)
      this.reset_board()
      for (let i=0; i<this.players; i++){
        if(!this.gameEnd) {
          this.playerData[i].position += Dice.roll()
        } else {
          this.playerData[i].position = this.playerData[i].position
        }

        if(this.playerData[i].position >= this.length-1) {
          this.winnerName = this.playerData[i].playerName
          this.playerData[i].position = this.length-1
          this.gameEnd = true;
        }
        this.print_line(this.playerData[i].playerName, this.playerData[i].position)


      }
      console.log('');
    }
    this.finished()

  }

  finished() {
    console.log(`Finisher is :${this.winnerName}`);
    this.winner()

  }

  winner() {
    console.log(`The Winner is :${this.winnerName}`);
  }

  reset_board() {
    console.log("\x1B[2J")
  }

}

module.exports = JSRacer;
