import { Component, OnInit } from '@angular/core';
import { TvMazeService } from '../tv-maze.service';
import { Show } from '../tv.models';

@Component({
  selector: 'tm-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  shows: Show[] = [];
  query = 'flash';

  constructor(private tv: TvMazeService) {
    this.search(this.query);
  }

  ngOnInit() {
  }

  search(query: string) {
    this.tv.searchShows(query)
      .subscribe(shows => this.shows = shows);
  }
}
