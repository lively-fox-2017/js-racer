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

function play(racer) {
  while (!racer.isFinished) {
    racer.play();
    sleep(800);
  }
}

// Your code here...
let racer = new JSRacer(3, 20);
play(racer);
