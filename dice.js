"use strict"

class Dice {
    constructor() {
        this.dadu = 2; //[1,2,3,4,5,6];
    }
    roll() {
        return Math.floor(Math.random() * 6) + 1
    }
}

module.exports = Dice;