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

  getShow(id: number | string): Observable<Show> {
    const url = `${this.rootUrl}/shows/${id}?embed=episodes`;
    return this.http.get<Show>(url);
  }

  searchShows(query: string): Observable<Show[]> {
    const url = `${this.rootUrl}/search/shows?q=${query}`;
    return this.http.get<ShowResponse[]>(url)
      .pipe(
        map(showsResponses => showsResponses.map(({show}) => show)),
      );
  }
}
