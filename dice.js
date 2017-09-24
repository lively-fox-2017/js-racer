"use strict"

class Dice {
  constructor() {

  }
  roll() {
    return Math.ceil(Math.random() * 6);
  }
}

// let dadu = new Dice;
// console.log(dadu.roll());

module.exports = Dice;
