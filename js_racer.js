"use strict"

const Dice = require('./dice');

class JSRacer {

  constructor(players, length) {
    this.playerTot = players
    this.length = length
    this.maju = 0
    this.awal = 0
    this.win = ''
    // this.players = ['A', 'B', 'C', 'D']
    this.history = []
  }

  print_board() {
    //method ini yang dipanggil pertama kali
    //method ini yang nantinya akan memanggil method advancedPlayer dan printLine
    
    //posisi awal semua pemain 0, looping di sini sesuai jumlah pemain
    //posisi player selanjutnya di tentukan oleh method advancedPlayer (panggil method advancedPlayer)
    //setelah mendapatkan posisi player selanjutnya maka panggil method printLine untuk nge-print line player tersebut
    //end looping
    //return array nya
    this.reset_board()
    let arrPlayer = []
    if(this.awal === 0){
      for(var i = 0; i < this.playerTot.length; i++){
        arrPlayer.push(this.print_line(this.playerTot.split('')[i], 0))
        this.awal++
      }
    }else if(this.awal !== 0){
      for(var i = 0; i < this.playerTot.length; i++){
        if(this.win === ''){
          this.history[i] += this.advanced_player(i)
          if(this.history[i] >= this.length - 1){
            this.history[i] = this.length - 1
            this.win += this.playerTot[i]
          }
        }
        arrPlayer.push(this.print_line(this.playerTot.split('')[i], this.history[i]))
      }
    }
    return arrPlayer.join('\n')
  }

  print_line(player, pos) {
    //method ini untuk print line posisi per player (makanya parameter nya ada player dan posisition)
    //akan ada looping di sini sesuai panjang lintasan
    //jika paramater pos sama dengan index lintasan maka push player ke index tersebut
    //end looping
    //return array
    
    let arrLength = []
    for(var i = 0; i < this.length; i++){
      if(i === pos){
        arrLength.push(player)
      }
      arrLength.push(' ')
    }
    return arrLength.join('|')
  }

  advanced_player(player) {
    
    //method ini untuk menentukan posisi player selanjutnya dengan cara mengocok dadu
    //karena ada pengocokan dadu maka Class Dice di panggil di sini
    //return nilai dadu yang keluar
    let dice = new Dice()
    this.maju = dice.roll()
    return this.maju

  }

  finished() {
    for(var i = 0; i < this.playerTot.length; i++){
      if(this.history[i] >= this.length - 1){
        console.log(this.winner(this.playerTot[i]))
        return 'STOP'
      }
    }
    return 'FINISH'
  }

  winner(player) {
    return `Player ${player} is the Winner!`
  }

  reset_board() {
    console.log("\x1B[2J")
  }

  historys() {
    for(var i = 0; i < this.playerTot.length; i++){
      this.history.push(0)
    }
    return this.history
  }

}

// let js = new JSRacer()
// js.historys()

module.exports = JSRacer;
