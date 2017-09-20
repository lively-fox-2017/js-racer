"use strict"

class Dice {
  constructor() {

  }
  roll() {
    return Math.round(Math.random()*5)+1;
  }
}

module.exports = Dice;
