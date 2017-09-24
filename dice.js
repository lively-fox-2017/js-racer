'use strict'

class Dice {
  constructor() {
    this.number = 0;
  }

  roll() {
    function getRandomDice() {
      return Math.floor((Math.random() * 6) + 1);
    }

    this.number = getRandomDice();
    return this.number;
  }
}
let dice = new Dice();
// dice.roll();

// console.log(dice.roll());
module.exports = Dice;
