"use strict"

const Dice = require('./dice');

class JSRacer {

  constructor(players, length) {
    this.players = players;
    this.length  = length;
    this.position = [];
    this.line = []; 
  }

  print_board() {   
    for(let i = 0 ; i < this.players.length ; i++){
      this.line.push([]);
      this.position.push(0);
      for(let j = 0; j < this.length+1 ; j++){
        let num = i;
        if(j === 0){ 
            this.line[i].push("|"+this.players[i])
            //
        }else{
            this.line[i].push("| ")
        }
      }
    }

    let lineString="";
    for(let i = 0 ; i < this.line.length ; i++){
      for(let j = 0; j < this.line[i].length ; j++){
        lineString += this.line[i][j];
      }
      lineString+= '\n'
    }

    return lineString
  }

  print_line(player,pos){
    let currentPos = this.line[player].indexOf("|"+this.players[player]+"");
    if(currentPos+pos > 20){
      this.line[player][this.length] = "|"+this.players[player]+"";
      this.position[player] = this.length;
      this.line[player][currentPos] = "| "
    }else{
    this.line[player][currentPos+pos] = "|"+this.players[player]+"";
    this.position[player] = currentPos+pos;
    this.line[player][currentPos] = "| "
    }
  }

  updateBoard(){
    let lineString="";
    for(let i = 0 ; i < this.line.length ; i++){
      for(let j = 0; j < this.line[i].length ; j++){
        lineString += this.line[i][j];
      }
      lineString+= '\n'
    }

    return lineString;
  }


  advanced_player(player) {
    let dice = new Dice();
    let steps = dice.roll();
    //console.log(steps);
    this.print_line(player,steps);
  }

  finished() {
    console.log(this.position);
    return Math.max(...this.position) >= this.length - 1;
  }

  winner() {
    return "the winner is "+this.players[this.position.indexOf(Math.max(...this.position))];
  }

  reset_board() {
    console.log("\x1B[2J")
  }

}

module.exports = JSRacer;
