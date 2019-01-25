import { Component } from '@angular/core';
import { TvMazeService } from '../tv-maze.service';
import { Show } from '../tv.models';
import { BookmarksService } from '../../bookmarks/bookmarks.service';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, map, pluck, tap } from 'rxjs/operators';
import { startsWithLetter } from '../../shared/forms/starts-with-letter.validator';

@Component({
  selector: 'tm-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  shows: Show[] = [];
  query = 'flash';
  bookmarks$: Observable<Show[]>;
  form: FormGroup;

  constructor(private tv: TvMazeService,
              private bs: BookmarksService<Show>,
              private fb: FormBuilder) {
    this.search(this.query);
    this.bookmarks$ = this.bs.items$;

    // const queryControl = this.fb.control('batman');
    this.form = this.fb.group({
      query: [
        this.query,
        [
          Validators.minLength(3),
          Validators.required,
          startsWithLetter(true),
        ]
      ],
    });

    this.form.valueChanges
      .pipe(
        pluck('query'), // map(v => v.query),
        debounceTime(200),
        tap(() => console.log(this.form.get('query').errors)),
        filter(() => this.form.valid),
        distinctUntilChanged()
      )
      .subscribe(this.search);
  }

  search = (query: string) => {
    this.tv.searchShows(query)
      .subscribe(shows => this.shows = shows);
  }
}
