"use strict"

const Dice = require('./dice');

class JSRacer {
  constructor(players, length) {
    this.pemain = []

     for(var i = 0; i < players.length; i++) {
     var player = []
     var posisi = 1
     player.push(players[i])
     player.push(posisi)
     this.pemain.push(player)
   }

   this.panjang = length
   this.lanjut = true
  } 
  print_board() {
    var lintasan = ''

   for(var i = 0; i < this.pemain.length; i++) {
     lintasan = lintasan + '\n' + this.print_line(this.pemain[i][0], this.pemain[i][1])
   }

   this.reset_board()
   console.log(lintasan);

  }
  print_line(player, pos) {
    var kotak = ''
   for(var i = 1; i <= this.panjang; i++ ) {
     if(pos == i) {
       kotak = kotak + player + '|'
     }
     else {
       kotak = kotak + ' |'
     }
   }
   return kotak

  }
  advanced_player(player) {
     var kocok = new Dice()
   var tambah = kocok.roll()
   if(this.pemain[player][1] + tambah <= this.panjang) {
     this.pemain[player][1] = this.pemain[player][1] + tambah
   }
   else {
     this.pemain[player][1] = this.panjang
     this.finished()
   }

  }
  finished() {
     this.lanjut = false
  }
  winner() {
    for(var i = 0; i < this.pemain.length; i++) {
     if(this.pemain[i][1] == this.panjang) {
       return 'dan pembalap ' + this.pemain[i][0] + ' is the winner '
     }
   }
   return 'Masih bersaing sodara-sodara...'

  }
  reset_board() {
    console.log("\x1B[2J")
  }
}

module.exports = JSRacer;
