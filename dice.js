"use strict"

class Dice {
  constructor() {
    this.dice = 0;
  }
  roll() {
    let dice = Math.floor((Math.random()*6)+1);
    this.dice = dice;
    return this.dice;
  }
}


module.exports = Dice;
