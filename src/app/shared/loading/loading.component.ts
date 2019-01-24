import { Component } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'tm-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent {
  pending = false;

  constructor(private router: Router) {
    this.router.events
      .subscribe(event => {
        if (event instanceof NavigationStart) {
          this.pending = true;
        }
        if (event instanceof NavigationEnd) {
          this.pending = false;
        }
      });
  }
}
