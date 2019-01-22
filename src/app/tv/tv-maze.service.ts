import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Show, ShowResponse } from './tv.models';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TvMazeService {
  private readonly rootUrl = 'https://api.tvmaze.com';

  constructor(private http: HttpClient) {
  }

  searchShows(query: string): Observable<Show[]> {
    const url = `${this.rootUrl}/search/shows?q=${query}`;
    return this.http.get<ShowResponse[]>(url)
      .pipe(
        // tap(console.log),
        map(showsResponses => showsResponses.map(({show}) => show)),
        // catchError((err) => {
        //   console.error('Error', err);
        //   return of([]);
        // }),
      );
  }
}
