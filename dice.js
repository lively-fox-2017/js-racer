"use strict"

class Dice {
  constructor() {
    this.result = 0;
  }
  roll() {
    this.result += Math.floor(6*Math.random())+1;
    return this.result;
  }
}

module.exports = Dice;
