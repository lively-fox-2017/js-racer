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
        // method yang akan di jalankan secara terus menerus 
        // belum ada player yang mencapai garis finish  // looping sebanyak player
        // panggil method advancePlayer tampung di variabel currPosisi
        // print_line(player, currPosisi) // end looping // return papan board

        this.reset_board();
        this.custom_pemain();

        for (let b = 0; b < this.players; b++) {
            let namaPlayer = this.pemain[b];
            // this.advanced_player();
            console.log(this.print_line(namaPlayer, b));
            this.advanced_player();
            // this.reset_board()
        }
    }

    print_line(player, pos) {
        // looping sepanjang array lintasa
        // jika i === pos, masukan si player ke 1 (pake push)
        // break // end looping

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
        // menentukan posisi player dengan cara mengocok dadu
        // class dadu panggil disini // kembalikan nilai dadu

        for (let b = 0; b < this.positions.length; b++) {
            this.positions[b] += dadu.roll();
            // console.log(this.positions[b]);
        }
        return this.positions;
    }
    finished() {
        // check apakah udah ada player yang udah sampai array lintasan

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
        console.log('Pemenangnya adalah ' + this.pemenang);
    }
    reset_board() {
        console.log("\x1B[2J");
    }
}

module.exports = JSRacer;