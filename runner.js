"use strict"

const JSRacer = require('./js_racer')
let data = new JSRacer(3, 28);

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds) {
            break;
        }
    }
}

// console.log(data.jalur);
// console.log(data.status);
// data.advanced_player();
// data.print_line();

// Your code here...
while (data.finished() === false) {
    data.reset_board();
    data.print_board();
    sleep(500);
}
data.winner();