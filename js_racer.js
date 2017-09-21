"use strict"

const Dice = require('./dice');

class JSRacer {
  constructor(players, length) {
	this.players = players;
	this.length = length;
	this.position = [];
	this.trapPosition = [];
	this.selesai = false;
	this.pemenang = "";
  }
  
  firstPosition(){
	// Untuk nentuin posisi awal players
	for(let i=0;i<this.players;i++){
		this.position.push(0);
	}
  }
  
  pasangJebakan(){
	// Untuk nentuin posisi jebakan
	let posisiJebakan;
	for(let i=0;i<this.players;i++){
		posisiJebakan = Math.ceil(Math.random()*this.length-2);
		this.trapPosition.push(posisiJebakan);
	}
  }
  
  print_board() {
	this.reset_board();
	
	console.log("- = Jebakan")
	// Pemain untuk nentuin pemainnya dari a - Z tergantung inputan playersnya brapa
	let pemain = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
	pemain = pemain.slice(0,this.players).split("");
	
	return this.print_line(pemain, this.position)+"\n";
  }
  
  print_line(player, pos) {
	// Untuk tampilin posisi player dan trap
	let semuaJalur = "";
	for(var row=0;row<this.players;row++){
		let jalur = "";
		for(let col=0;col<this.length;col++){
			if(col === this.length-1 && pos[row]>col){
				jalur += " |" + player[row];
				this.pemenang += player[row];
			}else if(col === pos[row]){
				jalur += player[row] + "|";
			}else if(col === this.trapPosition[row]){
				jalur += "-|";
			}else{
				jalur += " |";
			}
		}
		semuaJalur += jalur + "\n";
	}
	console.log(semuaJalur);
  }
  
  advanced_player() {
	// Untuk ngerubah atau set posisi tiap player
	for(let i=0;i<this.players;i++){
		// Untuk merubah posisi dari player yang kena jebakan
		if(this.position[i] === this.trapPosition[i]){
			this.position[i] -= 3;
			if(this.position[i] <0){
				this.position[i] = 0;
			}
		}else{
			this.position[i] += dice.roll();
			// Karna cuma bisa ada 1 pemenang jd ketika a finish loop lgsg berenti
			if(this.position[i] >= this.length){
				// this.position[i] = this.length+1;
				return this.selesai = true;
			}
		}		
	}
  }
  
  finished() {
	// Untuk batas akhir perulangan di runner.js
	return this.selesai;
  }
  
  winner() {
	// Untuk nampilin pemenang
	return this.pemenang + " adalah pemenangnya!!!";
  }
  
  reset_board() {
    console.log("\x1B[2J")
  }
}

let dice = new Dice();

module.exports = JSRacer;
