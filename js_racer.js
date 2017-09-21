"use strict"

const Dice = require('./dice');

class JSRacer {
    constructor(players, length) {
        this.players = players;
        this.numOfPlayers = players.length;
        this.length = length;
        this.isFinished = null;
        this.winningPlayer = null;
        this.trapsAndPowers = [];
    }

    init() {
        this.players = this.players.map(player => {
            return {
                name: player,
                position: -1 // starting grid
            }

        });
        this.isFinished = false;
        this.winningPlayer = '';
        this.trapPosition = this.randomizePosition().split('-').map(str => Number(str));
        this.powerPosition = this.randomizePosition().split('-').map(str => Number(str));
    }

    randomizePosition() {
        let randomPlayer = (new Dice(0, this.numOfPlayers - 1)).roll();
        let randomPos = (new Dice(0, this.length - 1)).roll();
        let pos = randomPlayer + '-' + randomPos;
        if (this.trapsAndPowers.indexOf(pos) === -1) {
            this.trapsAndPowers.push(pos);
            return pos;
        } else {
            return randomizePosition();
        }
        
    }

    backToStart(player) {
        player.position = -1;
    }

    instantFinish(player) {
        player.position = this.length;
    }

    run() {
         for (let i = 0; i < this.numOfPlayers; i++) {
            let isPlayerTrapped = (i === this.trapPosition[0] && this.players[i].position === this.trapPosition[1]) ? true : false;
            let isPlayerPowered = (i === this.powerPosition[0] && this.players[i].position === this.powerPosition[1]) ? true : false;

            if (isPlayerTrapped) {
                this.backToStart(this.players[i]);
            } else if (isPlayerPowered) {
                this.instantFinish(this.players[i]);
            } else {
                this.advanced_player(this.players[i]);
            }

            if (this.players[i].position >= this.length) {
                this.players[i].position = this.length;
                this.finished();
                break;
            }

        }
    }

    print_board() {

        for (let i = 0; i < this.numOfPlayers; i++) {
            let isHaveTrap = i === this.trapPosition[0] ? this.trapPosition : false;
            let isHavePower = i === this.powerPosition[0] ? this.powerPosition : false;

            this.print_line(this.players[i].name, this.players[i].position, isHaveTrap, isHavePower);
        }
    }

    print_line(player, pos, trap, power) {
        let track;

        pos === -1 ? track = '|' + player + ':' : track = '| :';   // on starting grid

        for (let i = 0; i < this.length + 1; i++) {
            if (trap && i === trap[1]) {                            // still racing
                pos === i ? track += player : track += '!';
            } else if (power && i === power[1]) {
                pos === i ? track += player : track += '*';
            } else if (i < this.length) {                          
                pos === i ? track += player : track += '_';
            } else {                                                // on finish line
                pos === i ? track += ':' + player + '|' : track += ': |';
            }
        }

        console.log(track);
    }

    advanced_player(player) {
        let dice = new Dice(1, 3);
        player.position += dice.roll();;
    }

    finished() {
        this.isFinished = true;
        this.winner();
    }

    winner() {
        this.winningPlayer = this.players.filter(player => player.position === this.length)[0].name;
        console.log('WINNER: ' + this.winningPlayer);
    }

    reset_board() {
        process.stdout.write('\x1Bc\n');
        // console.log("\x1B[2J");
        // process.stdout.write('\x1B[0f');
    }
}

module.exports = JSRacer;
