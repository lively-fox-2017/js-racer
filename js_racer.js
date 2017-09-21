'use strict'

const Dice = require('./dice')
// let dadu = new Dice()

class JSRacer {
  constructor(players, length) {
    this.reset_board();
    this.jumlahplayer = players;
    this.length = length;
    this.winner = '';
    this.player = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    this.history = [];
    this.jebakan = [];

    let array_temp = [];
    for (let i = 0; i < this.jumlahplayer; i++) {
      array_temp.push(this.player[i]);
      array_temp.push(0);
      this.history.push(array_temp);
      array_temp = [];
    }

  }

  jebakanbatman() { // bikin jebakan
    let trap = [] // data jebakannya dimasukkin ke constructor biar bisa dipanggil
    for (let i = 0; i < this.jumlahplayer; i++) {
      // jebakannnya dibuat sesuai dengan jumlah pemain yang ikut
      trap.push('X') // lambang kalau ada jebakan
      trap.push(Math.floor((Math.random() * this.length - 3) + 1)) // posisi jebakannya tiap pemain berbeda
      this.jebakan.push(trap)
      trap = []
    }
    return this.jebakan
  }

  print_board() {
    let board_all = [];

    for (let i = 0; i < this.history.length; i++) {
      // set dulu playernya di titik awal
      board_all.push(this.print_line(this.history[i][0], this.history[i][1], this.jebakan[i][0], this.jebakan[i][1]))
      if (this.winner === '') { // Selama belum ada winner
        if (this.jebakan[i][1] === this.history[i][1]) { // dicek, posisi player lagi di jebakannya bukan
          this.history[i][1] -= this.advanced_player() * 2
          // posisi player dikurangi jumlah dadunya
        }
        this.history[i][1] += this.advanced_player(); // posisi player ditambah dadunya
        if (this.history[i][1] >= this.length - 1) { // cek posisi player udah lebih besar dari length
          // dia gak boleh overlap jadi lengthnya dikurang 1 
          this.history[i][1] = this.length - 1;
          this.winner = this.history[i][0];
        }
      }
    }
    return board_all.join('\n');
  }

  print_line(player, pos = 0, trap, lokasi) { // butuh parameter player, posisi, tanda jebakan, dan posisijebakan
    // buat data player, trap, dan lokasi
    // return data lintasan individual
    let track_ind = [];
    // menyiapkan track larinya
    for (let i = 0; i < this.length; i++) { // dicek posisinya selama masih sepanjang tracknya
      if (pos === i) {
        track_ind.push(player + '|'); // player masuk pada posisi yang dia punya
      } else if (lokasi === i) {
        track_ind.push(trap + '|'); // nandain jebakannya dulu
      } else {
        track_ind.push(' |') // cuman bikin tracknya
      }
    }
    return track_ind.join(''); //dijoin biar keliatan tracknya
  }


  advanced_player() {
    // mengeluarkan dadu random antara 1 sampai 6
    let dadu = new Dice()
    return dadu.roll()
  }

  finished() {
    //cek apakah sudah ada player yang sampai ke garis finish
    //return true or false
    for (let i = 0; i < this.history.length; i++) {
      if (this.history[i][1] >= this.length - 1) {
        return true;
      }
    }
    return false;
  }

  thewinner() {
    // return siapa yang menang
    return `Player ${this.winner} is the winner`;
  }

  reset_board() {
    console.log("\x1B[2J")
  }
}



module.exports = JSRacer;