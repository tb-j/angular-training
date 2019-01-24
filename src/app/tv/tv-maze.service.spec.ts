import { TvMazeService } from './tv-maze.service';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Show, ShowResponse } from './tv.models';

describe('SearchService', () => {
  let tvmaze: TvMazeService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TvMazeService]
    });

    tvmaze = TestBed.get(TvMazeService);
    httpMock = TestBed.get(HttpTestingController);
  });

  describe('searchShows()', () => {
    it('returns transformed data', () => {
      let showsReturned: any;
      const showsSearchResponse: Partial<ShowResponse>[] = [
        {show: ({id: 1, name: 'Show1'}) as Show},
        {show: ({id: 2, name: 'Show2'}) as Show}
      ];
      const expectedResult: Partial<Show>[] = [
        {id: 1, name: 'Show1'},
        {id: 2, name: 'Show2'}
      ];

      tvmaze.searchShows('dummy')
        .subscribe(results => showsReturned = results);

      const req = httpMock.expectOne('https://api.tvmaze.com/search/shows?q=dummy');
      expect(req.request.method).toBe('GET');
      req.flush(showsSearchResponse);

      expect(showsReturned).toEqual(expectedResult);
    });
  });
});
