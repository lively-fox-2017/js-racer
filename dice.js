"use strict"

class Dice {
  constructor() {
    this.step = 0;
  }
  roll() {
    this.step += Math.round(Math.random()*6)
    return this.step;
  }
}

module.exports = Dice;
