"use strict"

class Dice {
  constructor() {
    
    this.dadu = 2;//[1,2,3,4,5,6];
  }
  roll() {
    return Math.round(Math.random()*this.dadu);
  }
}

module.exports = Dice;

// var positions = [0,0,0,0,0]

// function track(namaPlayer, idxPemain) {
//   let arr = []
//   for(let i=0; i<10; i++) {
//     if(i==positions[idxPemain]) {
//       arr.push(namaPlayer)
//     } else {
//       arr.push("_")
//     }
//   }
//   return arr.join("|")
// }

// function printFirstRound() {
//    let players = ["a", "b","c","d","e"]
//   for(let i=0; i<players.length; i++) {
//     let namaPlayer = players[i]
//     console.log(track(namaPlayer, i))
//   }
// }



// printFirstRound()


// function play() {
//   let players = ["a", "b","c","d","e"]
//   for(let i=0; i<players.length; i++) {
//     // get old position dari player[i]  //0
//     // roll dice //4
//     // new position dari player[i] // 4
//     // update position sesuai player nya , sebelum nya [0,0,0,0,0] menjadi [4,0,0,0,0]
//     let namaPlayer = players[i]
//     console.log(track(namaPlayer, i))
//   }
// }


