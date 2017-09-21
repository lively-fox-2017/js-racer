"use strict"

const Dice = require('./dice');

class JSRacer {
  constructor(players, length) {
    this.reset_board();
    this.player = players; 
    this.panjang = length;
    this.maju = 0;
    this.langkah = 0;
    this.history = [];
    this.pemenang = '';
    for (var i=0; i<this.player.length; i++) {
      this.history.push(0);
    }
  }
  print_board() {
    let arrPlayer = [];
    if (this.langkah == 0) {
      for (let i=0; i<this.player.length; i++) {
        arrPlayer.push(this.print_line(this.player[i],0))
        this.langkah++;
      }
    } else if (this.langkah !== 0) {
      for (var i=0; i<this.player.length; i++) {
        if (this.pemenang === '') {
          this.history[i] += this.advanced_player(i);

          if (this.history[i] >= this.panjang-1) {
            this.history[i] = this.panjang-1;
            this.pemenang += this.player[i];
          }
        }
        arrPlayer.push(this.print_line(this.player[i],this.history[i]))
      }
    }
    this.reset_board()
    return arrPlayer;
  }
  print_line(player, pos) {
    let arrTrack = [];
    for (var i=0; i<this.panjang; i++) {
      if (i == pos) {
        arrTrack.push(player)
      }
      arrTrack.push(' ');
    }
    return arrTrack.join('|');
  }
  advanced_player(player) {
    let dadu = new Dice();
    this.maju = dadu.roll();
    return this.maju;
  }


  finished() {
    for (var i=0; i<this.player.length; i++) {
      if (this.history[i] >= this.panjang-1) {
        console.log(this.winner(this.player[i]));
        return true;
      }
    }
    return false;
  }
  winner(player) {

    return `The Winner is ${player}`
  }

  reset_board() {
    console.log("\x1B[2J")
  }
}

module.exports = JSRacer;
