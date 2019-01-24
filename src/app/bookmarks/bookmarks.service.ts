import { Injectable } from '@angular/core';
import { Bookmark, BookmarkId } from './bookmarks.models';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookmarksService<T extends Bookmark = Bookmark> {
  items$ = new BehaviorSubject<T[]>([]);

  private items: T[] = [];
  private readonly apiRoot = 'http://localhost:3000/bookmarks';

  constructor(private http: HttpClient) {
    this.http.get<T[]>(this.apiRoot)
      .subscribe(this.setItems);
  }

  add(item: T): void {
    this.http.post(this.apiRoot, item)
      .pipe(
        map(() => [...this.items, item])
      )
      .subscribe(this.setItems);
  }

  remove(id: BookmarkId): void {
    this.http.delete(`${this.apiRoot}/${id}`)
      .pipe(
        map(() => this.items.filter(item => item.id !== id))
      )
      .subscribe(this.setItems);
  }

  has(id: BookmarkId): boolean {
    return this.items.some(item => item.id === id);
  }

  private setItems = (items: T[]) => {
    this.items = items;
    this.items$.next(items);
  }
}
