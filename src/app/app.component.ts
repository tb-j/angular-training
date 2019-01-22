import { Component } from '@angular/core';

@Component({
  selector: 'tm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tv-maniac';

  changeTitle(e: MouseEvent) {
    this.title = this.title + '!';
  }
}
