import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-page',
  templateUrl: './top-page.component.html',
  styleUrls: ['./top-page.component.less']
})
export class TopPageComponent implements OnInit {
  modes = [
    { name: '25 -classic-', link: '/classic25' },
    { name: '30 -advanced-', link: '/advanced30' }
  ];

  constructor() { }

  ngOnInit() { }
}
