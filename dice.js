"use strict"

class Dice {
  constructor() {
	this.urutDadu = 0;
  }
  roll() {
	return this.urutDadu = Math.ceil(Math.random()*6);
  }
}

module.exports = Dice;
