"use strict"

class Dice {
  roll() {
    return Math.floor(Math.random() * (6 - 1) + 1);
  }
}

module.exports = Dice;
