"use strict"

const Dice = require('./dice');

class JSRacer {
  constructor(players, length) {
    this.players = players;
    this.length = length;
    this.move = 0;
    this.begin = 0;
    this.win = "";
    this.history = [];
  }

  print_board() {
    this.reset_board()
    let arr_player = [] // untuk menampung player
    if (this.begin === 0) {
      var i = 0;
      while (i < this.players.length) {
        let split_player = this.print_line(this.players.split("")[i])
        arr_player.push(split_player)
        this.begin++
        i++;
      }
    }else if (this.begin !== 0) {
      var i = 0;
      while (i < this.players.length) {
        if (this.win === "") {
          this.history[i] = this.history[i]+this.advanced_player(i)
          if (this.history[i] >= this.length-1) {
            this.history[i] = this.length-1
            this.win = this.history[i] + this.players[i]
          }
        }
        arr_player.push(this.print_line(this.players.split("")[i],this.history[i]))
        i++;
      }
    }
    return arr_player.join("\n")
  }

  print_line(player, pos = 0) { // lintasan
    let line = []
    var i = 0;
    while (i < this.length) {
      if (i === pos) {
        line.push(player)
      }
      line.push(" ")
      i++;
    }
    return line.join("|")
  }

  advanced_player(player) { // langkah player
    let dice = new Dice()
    this.move = dice.roll()
    return this.move;
  }

  histori() { // menyimpan histori posisi player
    var i = 0;
    while (i < this.players.length) {
      this.history.push(0)
      i++;
    }
    return this.history
  }

  finished() {
    var i = 0;
    while (i < this.players.length) {
      if (this.history[i] == this.length-1) {
        console.log(this.winner(this.players[i]))
        return
      }
      i++;
    }
    return true
  }

  winner(player) {
    return 'The Champion is ' +player
  }

  reset_board() {
    console.log("\x1B[2J")
  }
}

module.exports = JSRacer;
