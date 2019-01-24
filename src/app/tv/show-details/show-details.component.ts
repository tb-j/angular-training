import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShowDetails } from '../tv.models';

@Component({
  selector: 'tm-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.scss']
})
export class ShowDetailsComponent {
  show: ShowDetails;

  constructor(route: ActivatedRoute) {
    this.show = route.snapshot.data.show;
  }

}
