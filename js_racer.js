"use strict"

const Dice = require('./dice');

class JSRacer {
  constructor(players, length) {
    this.panjang=length
    this.player=players

    this.dadu = new Dice(0)
  }

  print_board() {
    
  }

  print_line(player, pos) {

    let line=[]

    for(let i=0;i<((this.panjang+2)*2);i++){
      if(i==pos){
        line[i]=player
      }else{
        if(i%2===0){
          line[i]='|'
        }else{
          line[i]=' '
        }
      }
    }

    return line

  }

  advanced_player(pos) {

    return (this.dadu.roll()*2)+pos

  }

  finished(pos) {

    if(pos===21){
      console.log('Selamat, player '+this.player+' menang')
    }

  }

  winner() {

  }
  
  reset_board() {
    console.log("\x1B[2J")
  }
}

module.exports = JSRacer;
