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

  constructor(private tv: TvMazeService) {
    this.tv.searchShows('flash')
      .subscribe(shows => this.shows = shows);
  }

  ngOnInit() {
  }

  search(query: string) {
    this.tv.searchShows(query)
      .subscribe(shows => this.shows = shows);
  }
}
