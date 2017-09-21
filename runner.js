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
let jsracer = new JSRacer(5, 31);

if(jsracer.players > 52){
	console.log("Jumlah pemain melebihi batas");
}else{
	jsracer.firstPosition();
	jsracer.pasangJebakan();
	jsracer.print_board();
	console.log(jsracer.firstMessage("Ready?"));
	sleep(500);
	console.log(jsracer.firstMessage("Set?"));
	sleep(700);
	console.log(jsracer.firstMessage("Go!!"));
	sleep(300);
	while(jsracer.finished() !== true){
		jsracer.advanced_player();
		jsracer.print_board();
		sleep(1000);
	}

	console.log(jsracer.winner());
}
