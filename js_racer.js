"use strict"

const Dice = require('./dice');

class JSRacer {
  constructor(players, length) {
    this.players = players;
    this.panjang = length;
    this.posisi = this.pembalap();
    this.status = true;
  }

  pembalap() {
    let inisial = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
        playerPos = [],
        arrPlayerPos = [],
        posisi = 1;

    for (let i = 0; i < this.players; i++) {
      playerPos = [];
      playerPos.push(inisial[i], posisi);
      arrPlayerPos.push(playerPos);
    }
    return arrPlayerPos;
  }

  print_board() {
    this.reset_board();
    let lintasan = '';

    for (let i = 0; i < this.players; i++) {
      lintasan += this.print_line(this.posisi[i][0], this.posisi[i][1]) + '\n';
    }

    console.log(lintasan);
    this.winner();
  }

  print_line(player, pos) {
    let lintasan = '|';

    for (let i = 1; i <= this.panjang; i++) {
      if (i == pos) {
        lintasan += player + '|';
      } else {
        lintasan += ' |';
      }
    }
    return lintasan;
  }

  advanced_player(player) {
    let dadu = new Dice(),
        lempar = dadu.roll();

    if (this.posisi[player][1] + lempar <= this.panjang) {
      this.posisi[player][1] += lempar;
    } else {
      this.posisi[player][1] = this.panjang;
      this.finished();
    }
  }

  finished() {
    return this.status = false;
  }

  winner() {
    for (let i = 0; i < this.players; i++) {
      if (this.posisi[i][1] == this.panjang) {
        console.log('Pembalap ' + this.posisi[i][0] + ' memenangkan pertandingan!');
        break;
      }
    }
  }

  reset_board() {
    console.log('\x1B[2J');
  }
}

// let test = new JSRacer(3, 20);
// console.log(test.posisi);
// test.print_board();

module.exports = JSRacer;
