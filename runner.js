"use strict"

const JSRacer = require('./js_racer')

function sleep(milliseconds) {
	let start = new Date().getTime();
	for (let i = 0; i < 1e7; i++) {
    	if ((new Date().getTime() - start) > milliseconds) {
    		break;
    	}
  	}
}

// Your code here...

let race = new JSRacer(['A', 'B', 'C', 'D', 'E', 'F'], 90);


(function startGame() {
	race.init();
	race.reset_board();
	race.print_board();
	sleep(1000);

	while (!race.isFinished) {
		race.run();
		race.reset_board();
		race.print_board();
		sleep(125);
	}

	race.winner();
})();