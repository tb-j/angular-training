import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { ShowDetails } from '../tv.models';
import { Observable } from 'rxjs';
import { ShowDetailsParams } from '../../app-routing.module';
import { TvMazeService } from '../tv-maze.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShowDetailsResolver implements Resolve<ShowDetails> {
  constructor(private tv: TvMazeService) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<ShowDetails> {
    const { showId } = route.params as ShowDetailsParams;
    return this.tv.getShow(showId);
  }
}
