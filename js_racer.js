"use strict"

const Dice = require('./dice');

class JSRacer {
  constructor(players, length, jebakan) {
    this.players=players;
    this.length=length;
    this.lintasan=[];
    this.position=[];
    this.start=0;
    this.kenaRanjau=[];
    this.jebakan=jebakan;
  }
  //alokasikan posisi awal masing2 players
  set_slot_players(){
    for (var i = 0; i < this.players.length; i++) {
      this.position.push(0);
    }
  }
  //menampilkan lintasan masing2 players
  //memanggil print layer
  //memanggil advanced_player
  print_board() {
    let board=[];
    this.wPlayer=this.players[0].length;
    //melakukan pengecekan status apakah start awal atau sudah berlangsung
    if (this.start===0) {
      //set slot players
      this.set_slot_players();
      //lakukan perulangan sebanyak player
      for (var i = 0; i < this.players.length; i++) {
        //siapkan array lintasan
        this.lintasan=[];
        //push board dengan isi print line
        board.push(this.print_line(this.players[i],this.position[i])); //console.logg()
        //assign start dengan 1 unutk menandakan bahwa balanpan sudah dimulai
        this.start=1;
      }
    } else
      //lakukan perulangan sebnyak players
      for (var i = 0; i < this.players.length; i++) {
        //let lastPosition=this.position[i];
        // console.log(this.finished());
        if (!this.finished()) {
          this.advanced_player([i]);
        }
        //cek kondisi jika kena jebakan
        if (this.jebakan[this.jebakan.indexOf(this.position[i])]==(this.position[i])) {
          // console.log(`${this.players[i]} terkena jebakan di line ${this.position[i]}`);
          this.lintasan=[];
          this.players[i]=this.players[i];
          this.kenaRanjau.push('- '+this.players[i]+' terkena ranjau pada posisi '+this.position[i]);
          this.position[i]=0;
          board.push(this.print_line(this.players[i],this.position[i]));
        } else {
          //siapkan array lintasan
          this.lintasan=[];
          // board.push(this.print_line(this.players[i],this.position[i]));
          if (this.position[i] >= this.length-1) {
            //push board dengan isi print line dengan menambahkan langkah selanjutnya jika next position sudah finish
            board.push(this.print_line(this.players[i],this.length-1));
          } else {
            //push board dengan isi print line dengan menambahkan langkah selanjutnya
            board.push(this.print_line(this.players[i],this.position[i]));
          }
        }
      }
      // return board
      return board;
  }
  //membuat lintasan dnegan inputan plyer dan posisi
  print_line(player, pos) {
    //lakukan perulangan sebanyak panjang lintasan
    for (var j = 0; j < this.length; j++) {
      //jika j sama dengan posisi
      if (pos===j) {
        //push player
          this.lintasan.push(player+'|');
      } else {
        //push lintaan
        this.lintasan.push(' |')
      };
    }
    //return lintasan dan joinkan
    return this.lintasan.join('');
  }
  //menentukan maju berapa langkah memanggil fungsi dadu
  advanced_player(player) {
    //assign variabel dadu dengan memanggil fungsi dadu
    let dadu = new Dice();
    //update position dengan hasil acakan dadu
    this.position[player]+=dadu.roll();
    //return position
    // return this.position[player];
    return this;
  }
  //menentukan finish dimana
  finished() {
    //lakukan perulangan sebanyak position.length
    for (var i = 0; i < this.position.length; i++) {
      //jika position ada yang sama dengan atau melebihi panjang length maka return true
      if (this.position[i]>=this.length-1){
        return true;
      }
    }
    //jika blm ada yang finish maka return false
    return false;
  }
  //menentukan siapa yang menjadi pemenang
  winner() {
    //lakukan perulangan sebanyak position
    for (var i = 0; i < this.position.length; i++) {
      //jika position ada yang sama dengan atau melebihi panjang length maka return nama player
      if (this.position[i]>=this.length){
        return this.players[i];
      }
    }
    //jika tidak maka return -1
    return -1;
  }
  reset_board() {
    console.log("\x1B[2J")
  }
}

module.exports = JSRacer;
