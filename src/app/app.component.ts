import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit{
  cards:number[] = [];
  count: number = 0;
  num:number;
  spaces: number[];
  putCards: {[key:number]:number} = {};
  completed:boolean = false;
  isGameOvered: boolean = false;
  score: number;

  ngOnInit(){
    for (let i=1; i<=25 ; i++){
      this.cards.push(i);
    }
    this.spaces = [].concat(this.cards);
    for(let i=0; i<5; i++){ this.cards.pop(); }
    this.cards = this.shuffle(this.cards);
    this.num = this.cards[0];
  }

  onPut(i){
    if(this.check(i)){
      this.count++;
      this.putCards[i] = this.num;
      this.num = this.cards[this.count];
      if(this.count===5) {
        let firstRow = [this.cards[0],this.cards[1],this.cards[2],this.cards[3],this.cards[4]];
        for(let j=0; j<5; j++){ this.cards.shift(); }
        this.cards= firstRow.concat(this.shuffle(this.cards.concat([21,22,23,24,25])));
      }
      if(this.count===25) {
        this.completed = true;
      }else if(this.isGameOver()) {
        this.score = Object.keys(this.putCards).length; 
        this.isGameOvered = true;
      }
    }
  }

  @HostListener('click')
    onClick() {
       if(this.isGameOvered || this.completed) {
         setTimeout(()=> {
           location.reload();
         }, 2000); 
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
