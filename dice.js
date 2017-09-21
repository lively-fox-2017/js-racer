"use strict"

class Dice {
  constructor() {
    this.sides=6;
  }
  roll() {
    return Math.round(Math.random() * this.sides);
  }
}

module.exports = Dice;
