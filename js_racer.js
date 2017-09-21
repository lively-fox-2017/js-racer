"use strict"

const Dice = require('./dice');

class JSRacer {
  constructor(players, length) {
    this.players = players
    this.length = length
    this.maju = 0
    this.awal = 0
    this.win = ""
    this.history = []
  }

  print_board() {
    this.reset_board()

    let arrPemain = []
    if (this.awal == 0) {
      for (let i = 0; i < this.players.length; i++) {
        arrPemain.push(this.print_line(this.players.split("")[i],[0]))
        this.awal = this.awal + 1
      }
    }else if(this.awal !== 0) {
      for (let i = 0; i < this.players.length; i++) {
        if (this.win == "") {
          this.history[i] += this.advanced_player(i)
          if (this.history[i] >= this.length-1) {
            this.history[i] = this.length-1
            this.win += this.players[i]
          }
        }
        arrPemain.push(this.print_line(this.players.split("")[i],this.history[i]))
      }
    }
    return arrPemain.join("\n")
  }

  print_line(player, pos) {
    let arrLintasan = []

    for (let i = 0; i < this.length; i++) {
      if (i === pos) {
        arrLintasan.push(player)
      }
      // arrLintasan.push(" a ")
      arrLintasan.push(" ")
    }
    return arrLintasan.join("|")
  }

  advanced_player(player) {
    let dadu = new Dice()
    this.maju = dadu.roll()
    return this.maju
  }

  histori() {
    for (let i = 0; i < this.players.length; i++) {
      this.history.push(0)
    }
    return this.history
  }

  finished() {
    for (let i = 0; i < this.players.length; i++) {
      if (this.history[i] >= this.length-1) {
        console.log(this.winner(this.players[i]))
        return "STOP"
      }
    }
    return "FINISH"
  }

  winner(player) {
    return `THE WINNER IS....... ${player}`
  }

  reset_board() {
    console.log("\x1B[2J")
  }

}

// let test = new JSRacer('a',25)
// console.log(test.print_line());

module.exports = JSRacer;
