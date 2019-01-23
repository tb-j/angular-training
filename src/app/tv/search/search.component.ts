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
              private bs: BookmarksService) {
    this.search(this.query);
  }

  search(query: string) {
    this.tv.searchShows(query)
      .subscribe(shows => this.shows = shows);
  }

  saveBookmark(show: Show) {
    this.bs.add(show);
  }

  isBookmarked({ id }: Show): boolean {
    return this.bs.has(id);
  }

  get bookmarks(): Show[] {
    return this.bs.getAll() as Show[];
  }
}
