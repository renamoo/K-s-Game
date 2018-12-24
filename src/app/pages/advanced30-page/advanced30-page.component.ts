import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-advanced30-page',
  templateUrl: './advanced30-page.component.html',
  styleUrls: ['./advanced30-page.component.less']
})
export class Advanced30PageComponent implements OnInit {
  fields: { val: number }[][] = [];
  cardNums: number[] = [];
  cardNum: number;
  count: number = 0;
  isScoreShown: boolean = false;
  message: string;
  icon: string;

  constructor() { }

  ngOnInit() {
    for (let i = 0; i < 30; i++) {
      i % 6 === 0 ? this.fields.push([{ val: 0 }]) : this.fields[Math.floor(i / 6)].push({ val: 0 });
      if (i < 24) { this.cardNums.push(i + 1); }
    }
    this.shuffle(this.cardNums);
    this.cardNum = this.cardNums[this.count];
    this.isScoreShown = false;
  }

  onSelect(field: { val: number }, rowI: number, columnI: number) {
    if (this.isValid(field, rowI, columnI)) {
      this.count++;
      field.val = this.cardNum;
      if (this.count === 5) { this.addCards(); }
      this.cardNum = this.cardNums[this.count];
      if (this.isGameOver()) { this.showScore(); }
    }
  }

  onRepeat() {
    location.reload();
  }

  private isValid(field: { val: number }, rowI: number, columnI: number) {
    if (rowI === 4 && field.val === 0) { return true; }
    if (this.fields[rowI][columnI].val !== 0) { return false; }
    const bottomNum = this.fields[rowI + 1][columnI].val;
    if (bottomNum === 0 || bottomNum > this.cardNum) { return false; }
    return true;
  }

  private isGameOver() {
    if (this.fields[4].some(f => f.val === 0)) { return false; }
    if (!this.fields[0].some(f => f.val === 0)) { this.perfect(); return false; }
    const topNums = [];
    for (let i = 0; i < 6; i++) {
      this.fields.some(arr => {
        if (arr[i].val !== 0) { topNums.push(arr[i].val); return true; }
      });
    }
    return !topNums.some(f => this.cardNum > f);
  }

  private perfect() {
    this.message = 'Amazing! すごいね!';
    this.icon = 'fa-glass-cheers';
    this.isScoreShown = true;
  }

  private showScore() {
    this.message = this.count <= 10 ? 'まだまだ!' : this.count <= 20 ? 'いい感じ!' : 'すごい!あと少し!';
    this.icon = 'fa-ghost';
    this.isScoreShown = true;
  }

  private addCards() {
    const stash = [];
    for (let i = 0; i < 5; i++) { stash.push(this.cardNums.shift()); }
    const newArr = this.cardNums.concat([25, 26, 27, 28, 29, 30]);
    this.shuffle(newArr);
    this.cardNums = stash.concat(newArr);
  }

  private shuffle(array: number[]) {
    for (let i = array.length - 1; i >= 0; i--) {
      const rand = Math.floor(Math.random() * (i + 1));
      [array[i], array[rand]] = [array[rand], array[i]];
    }
  }
}
