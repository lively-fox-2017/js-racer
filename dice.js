"use strict"

class Dice {
  constructor() {
    this.num = 6
  }
  roll() {
    var randomNumber = Math.floor(Math.random() * this.num) + 1
    return randomNumber 
  }
}

let dice = new Dice()
// console.log(dice.roll())

module.exports = Dice;
