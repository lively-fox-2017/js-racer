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

let i=0,
    balapan=new JSRacer(['a','b','c','d','e'],40,[8,20]);
//melakukan perulangan selama belum ada yang finish
while (!balapan.finished()) {
  //melakukan reset board biar layar tmpak berubah
  balapan.reset_board();
  //memulai balapan
  console.log(balapan.print_board());
  //sleep sebnyak 1 detik
  sleep(1000);
}
//menampilkan pemenangnya
console.log('Pemenangnya adalah => '+balapan.winner());
for (var x = 0; x < balapan.kenaRanjau.length; x++) {
  if (x==0) {
    console.log('Laporan situasi balapan:');
  }
  console.log(balapan.kenaRanjau[x]);
}
