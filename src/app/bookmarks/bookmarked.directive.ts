import { Directive, HostBinding, HostListener, Input } from '@angular/core';
import { BookmarksService } from './bookmarks.service';
import { Bookmark } from './bookmarks.models';

@Directive({
  selector: '[tmBookmarked]',
  exportAs: 'tmBookmarked'
})
export class BookmarkedDirective {
  @Input('tmBookmarked') item: Bookmark; // tslint:disable-line:no-input-rename

  constructor(private bs: BookmarksService) {
  }

  @HostBinding('class.bookmarked')
  get isBookmarked() {
    return this.item && this.bs.has(this.item.id);
  }

  @HostBinding('class.transparent')
  isTransparent = false;

  @HostListener('click', ['$event.target'])
  toggleTransparent(target: HTMLElement) {
    if (target.tagName === 'IMG') {
      this.isTransparent = !this.isTransparent;
    }
  }

}
