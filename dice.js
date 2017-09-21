"use strict"

class Dice {
  constructor() {
    this.diceState = 6;
  }
  roll() {
    this.diceState = Math.floor((Math.random()*6)+1);  
    return this.diceState;
  }
}

module.exports = Dice;
