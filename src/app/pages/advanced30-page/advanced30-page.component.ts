import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-advanced30-page',
  templateUrl: './advanced30-page.component.html',
  styleUrls: ['./advanced30-page.component.less']
})
export class Advanced30PageComponent implements OnInit {
  fields: { val: number }[][] = [];

  constructor() {}

  ngOnInit() {
    for (let i = 0; i < 30; i++) {
      switch (i % 6) {
        case 0:
          this.fields.push([{ val: 0 }]);
          break;
        default:
          this.fields[Math.floor(i / 6)].push({ val: 0 });
          break;
      }
    }
    console.log(this.fields);
  }
}
