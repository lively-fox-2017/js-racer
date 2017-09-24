'use strict'

const Dice = require('./dice');

class JSRacer {
  constructor(players, length) {
    this.players = players;
    this.length = length;
    this.posisi = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.win;
    this.namePlayer = [];
    this.isFinished = false;
  }

  print_board() {
    let x;
    this.reset_board();


    for (let i = 0; i < this.players; i++) { // looping sebanyak player
      this.namePlayer.push(String.fromCharCode(65 + i));// nama player abjad
      let namePlayer = this.namePlayer[i];
      console.log(this.print_line(namePlayer, i)); //print_line
      this.advanced_player(); //panggil method advanced_player
      if (this.posisi[i] >= this.length - 1) {
        // x = this.posisi[i] - (this.length - 1);
        this.win = namePlayer;
        this.isFinished = true;
        this.finished();
      }
    }

  }

  print_line(player, pos) {

    let arr = [];
    for (let i = 0; i < this.length; i++) { // looping sepanjang lintasan
      if (i === this.posisi[pos]) { //jika i === pos maka push player
        arr.push(player);
      } else {
        arr.push(' ');
      }
    }

    return arr.join('|');
  }

  advanced_player() {
    for (let i = 0; i < this.players; i++) { //menentukan posisi player dengan mengocok dadu
      this.posisi[i] += dice.roll(); //class dadu dipanggil kembalikan nilai dadu
    }
  }

  finished() {
    return this.isFinished;
  }

  winner() {
    console.log('Player ' + this.win + ' has win the game');

  }

  reset_board() {
    console.log('\x1B[2 ');
  }
}
// let racer = new JSRacer(2, 10);
let dice = new Dice();

// dice.roll();
// racer.advanced_player();
// racer.print_board();
// console.log(racer.winner());
// racer.winner();
// console.log(dice.roll());
// console.log(racer.print_board());

module.exports = JSRacer;
