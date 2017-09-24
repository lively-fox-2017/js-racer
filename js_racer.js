"use strict"

const Dice = require('./dice');
let dice = new Dice();

class JSRacer {
  constructor(players, length) {
    this.players = players;
    this.length = length;
    this.posisi = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.namaPlayer = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'v', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    this.finish = false;
    this.win;
    // this.winner = '';
  }

  print_board() {
    let x;
    this.reset_board();
    for (let i = 0; i < this.players; i++) {
      let nama = this.namaPlayer[i];
      console.log(this.print_line(nama, i));
      this.advanced_player();
      if (this.posisi[i] >= this.length - 1) {
        x = this.posisi[i] - (this.length - 1);
        this.posisi[i] = this.posisi[i] - x;
        this.win = nama;
        this.finish = true;
        this.finished();
      }
    }

  }
  print_line(player, pos) {

    let arr = []
    for (let i = 0; i < this.length; i++) {
      if (i == this.posisi[pos]) {
        arr.push(player);
      } else {
        arr.push(' ');
      }
    }

    return arr.join('|');
  }

  advanced_player() {
    let x;
    // while(this.finish == false){
    for (let i = 0; i < this.players; i++) {
      this.posisi[i] += dice.roll();
    }


  }

  finished() {
    return this.finish;
  }
  winner() {
    console.log('Congratulation ' + this.win + ' !!!!')
  }
  reset_board() {
    console.log("\x1B[2J")
  }
}

module.exports = JSRacer;
