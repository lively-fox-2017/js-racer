"use strict"

const Dice = require('./dice');

class JSRacer {
  constructor(players, length) {
    this.players =players ;
    this.length  =length ;
    this.player = [];
    this.pos = [];
    this.finish=false;
    this.champ ='';
    this.trap=[];
    this.bonus = [];
  }
  print_board() {
    this.reset_board ()

    for (let r=0 ; r < this.players ;r++){

      if (this.finish==false && dadu.move.length > 0){ // membuat start dari awal garis

        if(this.bonus[0]== r && this.bonus[1] == this.pos[r]){
          this.pos[r]+=10
        }
        else if(this.trap[0]== r && this.trap[1] == this.pos[r]){
          this.pos[r]-=10
        }


        if(this.pos[r] + dadu.move[r]>=this.length-1){ //berhenti di finish tidak masuk podium :D
          this.pos[r]=this.length-1
          this.finish=true
          this.champ= this.player[r]
        }
        else{
          this.pos[r] += dadu.move[r]
        }
      }
    }

      for (let i=0 ; i < this.players ;i++){ //the race
        this.print_line(this.player[i],this.pos[i] )
      }
    dadu.roll(this.players)

  }
  print_line(player, pos) {
    let line=''
    for (let i=0 ; i < this.length ; i++){
      if (i==pos) { // insert racer
        line+= '|'+ player
      }
      else if(i==this.trap[1] && player == String.fromCharCode(97+this.trap[0])){
        line+= '|X'
      }
      else if(i==this.bonus[1] && player == String.fromCharCode(97+this.bonus[0])){
        line+= '|O'
      }
      else{
        line+= '| ' //create track
      }
    }
    console.log(line);
  }
  // advanced_player(player) {
  advanced_player() {
    for (let i=0 ; i < this.players ;i++){
      this.player.push(String.fromCharCode(97+i))
      this.pos.push(0)
    }
    this.trap.push(Math.floor(Math.random()* this.players)) //create trap
    this.trap.push(Math.floor(Math.random()* this.length)+1)

    this.bonus.push(Math.floor(Math.random()* this.players)) //create bonus
    this.bonus.push(Math.floor(Math.random()* this.length)+1)
  }
  finished() {
    return this.finish
  }
  winner() {
    console.log('Player \'' , this.champ , '\' is the winner')
  }
  reset_board() {
    console.log("\x1B[2J")
  }
}

let dadu = new Dice ;

module.exports = JSRacer;
