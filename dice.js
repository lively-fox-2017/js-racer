"use strict"

class Dice {
  constructor() {
    this.sides = 6
  }
  roll() {
    return Math.floor(Math.random() * this.sides) + 1
  }
}

// let dadu = new Dice()
// console.log(dadu.roll());

module.exports = Dice;
