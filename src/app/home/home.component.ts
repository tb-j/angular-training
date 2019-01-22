import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'tm-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @Input() owner = 'me';
  @Output() timePass = new EventEmitter<number>();

  constructor() {
    setInterval(() => {
      this.timePass.emit(+new Date());
    }, 2345);
  }

  ngOnInit() {
  }

}
