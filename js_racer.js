"use strict"

const Dice = require('./dice');
let dadu = new Dice();
class JSRacer {
  constructor(players, length) {
    this.players = players;
    this.jalur = length;
    this.pemain = [];
    this.positions = [];
    this.status = false;
    this.pemenang;
    this.jauh;
  }
  print_board() {
    this.reset_board();
    this.custom_pemain();


    //method yg akan jalan terus menerus SELAMA belum ada player yg mencapai finis
    // lopping sebanyak player
    //panggil method advancedPlayer di variable vurrPosisi
    //print_line(player, currentposisi)
    //end looping
    // return papa_board 

    for (let b = 0; b < this.players; b++) {
      let namaPlayer = this.pemain[b];
      // this.advanced_player();
      console.log(this.print_line(namaPlayer, b));
      this.advanced_player();
      // this.reset_board()
    }



  }
  print_line(player, pos) {
    //looping sepanjang array lintasan
    //jika a=== pos, masukan si player ke i (pake push)
    //break
    // end looping 


    let arr = [];
    for (let a = 0; a < this.jalur; a++) {
      // console.log(a);
      // console.log(this.positions);
      if (a == this.positions[pos]) {
        arr.push(player);
      } else {
        arr.push(' ');
      }
    }
    return arr.join('|');
  }
  custom_pemain() {
    let players = 'abcdefghijklmnopqrstuvwxyz';
    for (let a = 0; a < this.players; a++) {
      // console.log(a);
      this.positions.push(0);
      this.pemain.push(players[a]);
    }

  }
  advanced_player() {
    // this.custom_pemain();
    //menentukan posisi player dgn cara kocok dadu
    //class dadu panggil disini
    //return nilai dadu
    // this.print_line();

    for (let b = 0; b < this.positions.length; b++) {
      this.positions[b] += dadu.roll();
      // console.log(this.positions[b]);
    }
    return this.positions;
  }
  finished() {
    for (let i = 0; i < this.positions.length; i++) {
      if (this.positions[i] >= this.jalur) {

        this.pemenang = this.pemain[i];
        // this.jauh = this.positions[i];
        return true;

      }

    }
    return false;
  }
  winner() {
    this.finished();
    console.log( /*'Anda di jalur terjauh yaitu ' + this.jauh + ' yaitu ' */ 'Juaranya adalah ' + this.pemenang);
  }
  reset_board() {
    console.log("\x1B[2J");
  }
}
// let data = new JSRacer(4, 30);


// data.advanced_player();
// data.print_board();
// data.print_line();


// console.log(data.print_jalur());
// console.log(data.print_line(3, 40));
module.exports = JSRacer;