import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShowDetailsParams } from '../../app-routing.module';
import { Show } from '../tv.models';
import { TvMazeService } from '../tv-maze.service';

@Component({
  selector: 'tm-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.scss']
})
export class ShowDetailsComponent {
  show: Show;

  constructor(route: ActivatedRoute,
              tv: TvMazeService) {
    const { showId } = route.snapshot.params as ShowDetailsParams;

    tv.getShow(showId)
      .subscribe(show => this.show = show);
    // https://api.tvmaze.com/shows/13243?embed=episodes
  }

}
