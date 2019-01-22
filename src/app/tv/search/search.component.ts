import { Component, OnInit } from '@angular/core';
import { TvMazeService } from '../tv-maze.service';

@Component({
  selector: 'tm-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(private tv: TvMazeService) {
    this.tv.searchShows('flash')
      .subscribe();
  }

  ngOnInit() {
  }

}
