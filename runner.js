"use strict"

const JSRacer = require('./js_racer')

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds) {
      break;
    }
  }
}

// Your code here...

var race = new JSRacer(8,50);
race.jebakanbatman()
// console.log(race.jebakan)
while(race.finished() === false){
  console.log('--------------------------------------TRACK LARI------------------------------')  
  console.log(race.print_board());
	sleep(1000);
	// race.reset_board();	
	
}
console.log('--------------------------------------TRACK LARI-------------------------------')  
console.log(race.print_board())
console.log(race.thewinner());
