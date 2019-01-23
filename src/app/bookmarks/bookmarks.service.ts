import { Injectable } from '@angular/core';
import { Bookmark, BookmarkId } from './bookmarks.models';

@Injectable({
  providedIn: 'root'
})
export class BookmarksService<T extends Bookmark> {
  private items: T[] = [];

  getAll(): T[] {
    return [...this.items];
  }

  add(item: T): void {
    this.items.push(item);
  }

  remove(id: BookmarkId): void {
    this.items = this.items.filter(item => item.id !== id);
  }

  has(id: BookmarkId): boolean {
    return this.items.some(item => item.id === id);
  }
}
