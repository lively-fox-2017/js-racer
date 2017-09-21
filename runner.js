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

let Racer = new JSRacer('A',10)
let Racer1= new JSRacer('B',10)
let temp=1;
let temp1=1;
console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");
console.log(Racer.print_line('A',1).join('').toString())
console.log(Racer.print_line('B',1).join('').toString())
	setInterval(function () {
		console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");
		temp=Racer.advanced_player(temp)
		temp1=Racer.advanced_player(temp1)
		if(temp>21){
			temp=21
		}

		if(temp1>21){
			temp1=21
		}
		
		console.log(Racer.print_line('A',temp).join('').toString())
		console.log(Racer1.print_line('B',temp1).join('').toString())
		Racer.finished(temp)
		if(temp==21){
			process.exit()
		}
		Racer1.finished(temp1)
		if(temp1==21){
			process.exit()
		}
  	}, 1000);

