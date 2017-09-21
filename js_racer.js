"use strict"

const Dice = require('./dice');

class JSRacer {

  constructor(players, length) {
    this.playerTot = players
    this.length = length
    this.players = ['A', 'B', 'C', 'D']
  }

  print_board() {

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
