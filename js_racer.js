"use strict"

const Dice = require('./dice');

class JSRacer {

  constructor(players, length) {
    this.playerTot = players
    this.length = length
    this.players = ['A', 'B', 'C', 'D']
  }

  print_board() {
    
    //method ini yang dipanggil pertama kali
    //method ini yang nantinya akan memanggil method advancedPlayer dan printLine
    
    //posisi awal semua pemain 0, looping di sini sesuai jumlah pemain
    //posisi player selanjutnya di tentukan oleh method advancedPlayer (panggil method advancedPlayer)
    //setelah mendapatkan posisi player selanjutnya maka panggil method printLine untuk nge-print line player tersebut
    //end looping
    //return array nya

    let arr = []
    let reg = new RegExp(',', 'g')
    for(var i = 0; i < 4; i++){
      arr.push([])
      for(var j = 0; j < 30; j++){
        arr[i].push('|')
      }
    }
    return arr.join('\n').replace(reg, ' ')

  }

  print_line(player, pos) {
    //method ini untuk print line posisi per player (makanya parameter nya ada player dan posisition)
    //akan ada looping di sini sesuai panjang lintasan
    //jika paramater pos sama dengan index lintasan maka push player ke index tersebut
    //end looping
    //return array
    
    
    // console.log(this.print_board().length)
    let arr = []
    let split = this.print_board().split('\n')
    for(var i = 0; i < 1; i++){
      split[0] += this.players[0]
      split[1] += this.players[1]
      split[2] += this.players[2]
      split[3] += this.players[3]
      // console.log(split)
    }

    console.log(split)
    // arr.push(this.print_board())
    // console.log(arr)
    // for(var i = 0; i < this.players.length; i++){
    //   this.players[0] = this.print_board()
    //   arr.push(this.players)
    // }
    // return arr

  }

  advanced_player(player) {
    
    //method ini untuk menentukan posisi player selanjutnya dengan cara mengocok dadu
    //karena ada pengocokan dadu maka Class Dice di panggil di sini
    //return nilai dadu yang keluar

  }

  finished() {

  }

  winner() {

  }

  reset_board() {
    console.log("\x1B[2J")
  }

}

let js = new JSRacer()
// console.log(js.print_board())
console.log(js.print_line())

module.exports = JSRacer;
