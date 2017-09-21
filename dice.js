"use strict"

class Dice {
  constructor() {
    this.number = null;
  }
  roll() {
    this.number = ((Math.floor(Math.random() * 300) + 1) % 3) + 1;
    return this.number;
  }
}

module.exports = Dice;
