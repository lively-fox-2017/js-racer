"use strict"

class Dice {
  constructor() {
    this.dadu = 6;
  }
  roll() {
   this.dadu = Math.ceil(Math.random()*6);
   return this.dadu;
  }
}

module.exports = Dice;
