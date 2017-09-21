"use strict"

class Dice {
  constructor() {
    this.move = [];
  }
  roll(players) {
    this.move = [];
    for(let i=0 ; i< players ; i++){
      this.move.push(Math.floor(Math.random()*6)+1)
    }
    return this
  }
}

// let acak = new Dice
//
// console.log(acak.roll(3));

module.exports = Dice;
