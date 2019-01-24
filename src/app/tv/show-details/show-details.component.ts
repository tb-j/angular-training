import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShowDetailsParams } from '../../app-routing.module';
import { ShowDetails } from '../tv.models';
import { TvMazeService } from '../tv-maze.service';

@Component({
  selector: 'tm-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.scss']
})
export class ShowDetailsComponent {
  show: ShowDetails;

  constructor(route: ActivatedRoute,
              tv: TvMazeService) {
    const { showId } = route.snapshot.params as ShowDetailsParams;

    tv.getShow(showId)
      .subscribe(show => this.show = show);
  }

}
