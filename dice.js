"use strict"

class Dice {
  constructor() {

  }
  roll() {
  	return Math.floor((Math.random() * 3) + 1)*2;
  }
}

module.exports = Dice;
