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
let player=['a','b','c']
let jsracer=new JSRacer(player,25);
for(let i=0;i<player.length;i++){
	jsracer.print_line(player[i],0);
	console.log(player[i])
}
while(true){
	if(jsracer.print_board()==-1){
		return false;
	}
	sleep(500);
}
