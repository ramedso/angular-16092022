import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter', //html tag
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent implements OnInit {
  @Input() name: string;

  private counter: number = 0;

  constructor() {}

  ngOnInit() {}

  increase() {
    this.counter++;
  }

  getCounter() {
    return this.counter;
  }
}
