"use strict"

class Dice {
  constructor() {
    this.number = 0;
  }

  roll() {
    this.number = Math.round(Math.random()*(6-1)+1);
    return this.number;
  }
}

module.exports = Dice;
