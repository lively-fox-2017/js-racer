"use strict"

class Dice {
	constructor(min, max) {
		this.min = min;
		this.max = max
	}
	roll() {
		return Math.round(Math.random() * (this.max - this.min) + this.min);
	}
}

module.exports = Dice;