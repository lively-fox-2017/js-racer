"use strict"

class Dice {
  constructor() {

  }
  roll() {
  	let d=6;
  	let rolling=Math.floor(Math.random()*6);
  	return rolling;
  }
}

module.exports = Dice;
