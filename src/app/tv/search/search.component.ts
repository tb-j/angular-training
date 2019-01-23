import { Component, OnInit } from '@angular/core';
import { TvMazeService } from '../tv-maze.service';
import { Show } from '../tv.models';
import { BookmarksService } from '../../bookmarks/bookmarks.service';

@Component({
  selector: 'tm-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  shows: Show[] = [];
  query = 'flash';

  constructor(private tv: TvMazeService,
              private bs: BookmarksService<Show>) {
    this.search(this.query);
  }

  search(query: string) {
    this.tv.searchShows(query)
      .subscribe(shows => this.shows = shows);
  }

  get bookmarks(): Show[] {
    return this.bs.getAll();
  }
}
