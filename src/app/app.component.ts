import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit{
  cards:number[] = [];
  count: number = 0;
  num:number;
  putCards: {[key:number]:number} = {};
  completed:boolean = false;
  isGameOvered: boolean = false;

  ngOnInit(){
    for (let i=1; i<=25 ; i++){
      this.cards.push(i);
    }
    this.cards = this.shuffle(this.cards);
    this.num = this.cards[0];
  }

  onPut(i){
    if(this.check(i)){
      this.count++;
      this.putCards[i] = this.num;
      this.num = this.cards[this.count];
      if(this.isGameOver()) this.isGameOvered = true;
    }
  }

  check(i){
    if(i >= 20 && !this.putCards[i]) return true;
    if(!this.putCards[i + 5]) return false;
    if(this.putCards[i + 5]>this.num) return false;
    return true;
  }

  isGameOver(){
    if(!this.putCards[20]&&this.putCards[21]&&this.putCards[22]&&this.putCards[23]&&this.putCards[24]) return false;
    for(let i=0; i<5; i++){
      if(this.isAcceptable(i)) return false;
    }
    return true;
  }

  isAcceptable(n){
    let max = this.putCards[n] || this.putCards[n+5] || this.putCards[n+10] || this.putCards[n+15] || this.putCards[n+20];
    return max > this.num ? false : true;
  }

  shuffle(array) {
    var n = array.length, t, i;
  
    while (n) {
      i = Math.floor(Math.random() * n--);
      t = array[n];
      array[n] = array[i];
      array[i] = t;
    }
  
    return array;
  }
  
}
