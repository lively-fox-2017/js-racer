"use strict"
var Dice = require('./dice')

class JSracer {
  //buat parameter player dan length
  constructor(player,length) {
    this.player = player
    this.length = length
    //posisi dilooping berdasarkan player
    this.posisi = []
    //posisi player direset posisinya menjadi 0
    for (var i = 0; i < this.player.length; i++) {
      this.posisi.push(0)
    }
    //buat variable string kosong
    this.winner = ''
    this.trap = []
  }
  //buat print boardnya
  print_board(){
    //buat array kosong
    let arr = []
    //kemudian looping panjang player
    for (let i = 0; i < this.player.length ; i++) {
    //push arr kedalam method this.line(this.player[i],this.posisi[i])
      arr.push(this.line(this.player[i],this.posisi[i],this.trap[i][0],this.trap[i][1]))
      //jika winner masih kosong = ''
      if(this.winner===''){
      //maka posisi[i] + method dari this.dadu()
        this.posisi[i]+=this.dadu()
        //jika this.posisi[i] >= this.panjang
        if(this.posisi[i]==this.trap[i][1]){
          this.posisi[i]-=5;
        }
        if(this.posisi[i] >= this.length){
          //maka this.posisi[i] = this.panjang
          this.posisi[i] = this.length
          //winner = playernya[i]
          this.winner = this.player[i]
        }
      }
    }
    return arr;
  }
  //method line punya parameter (player,posisi)
  line(player,posisi,jebakanX,lokasiX){
    //buat array kosong []
    let arr = []
    //looping berdasarkan panjang
    for (let i = 0; i <= this.length; i++) {
      //jika index i == posisi
      if (i == posisi) {
        //maka push player
        arr.push(player)
        //jika tidak si random lokasiX = index
      } else if (lokasiX == i) {
        //push X kedalamnya
        arr.push(jebakanX)
      } else {
        //arr dipush ('|')
        arr.push('|')
      }
    }
    // dan direplace join dengan spasi (' ')
    return arr.join(' ')
  }

  //kocok dadu
  dadu(){
  let dice = new Dice();
  return dice.roll()
  }

  jebakanBatman(){
    let arr = []
    //looping berdasarkan jumlah player
    for (var i = 0; i < this.player.length; i++) {
      //push 'X' untuk jebakannya
      arr.push('X')
      //posisinya random
      arr.push(Math.floor(Math.random()*this.length))
      //kemudian tampung pada this.trap
      this.trap.push(arr)
      //reset arr []
      arr = []
    }
    return this.trap
  }
  // Method finishnya
  finished(){
  // looping panjang this.posisi
    for (var i = 0; i < this.posisi.length; i++) {
      // jika this.posisi >= this.length
      if(this.posisi[i] >= this.length){
        //return true
        return true;
      }
    }
    //return false
    return false
  }
  // method pemenang
  pemenang(){
    //cetak player pemenang this.winner
    return `selamat player "${this.winner}" adalah pemenang`;
  }
}

module.exports = JSracer;
