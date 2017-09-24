"use strict"

const Dice = require('./dice');

class JSRacer {
    constructor(players, length) {
        this.pemain = []
        this.panjang = length // panjang lintasan
        this.lanjut = true // stat pemain

        for (let i = 0; i < players.length; i++) {
            let player = []
            let posisi = 1
            player.push(players[i])
            player.push(posisi)
            this.pemain.push(player) // push pemain
        }
    }
    print_board() {
        // method yang akan di jalankan secara terus menerus
        // belum ada player yang mencapai garis finish  // looping sebanyak player
        // panggil method advancePlayer tampung di variabel currPosisi
        // print_line(player, currPosisi) // end looping // return papan board
        var lintasan = ''
        for (let j = 0; j < this.pemain.length; j++) {
            lintasan = lintasan + '\n' + this.print_line(this.pemain[j][0], this.pemain[j][1])
        }
        this.reset_board()
        console.log(lintasan)
    }
    print_line(player, pos) {
        // looping sepanjang array lintasa
        // jika i === pos, masukan si player ke 1 (pake push)
        // break // end looping

    }
    advanced_player(player) {
        // menentukan posisi player dengan cara mengocok dadu
        // class dadu panggil disini // kembalikan nilai dadu
    }
    finished() {
        // check apakah udah ada player yang udah sampai array lintasan 
    }
    winner() {

    }
    reset_board() {
        console.log("\x1B[2J")
    }
}

module.exports = JSRacer;