import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookmarkAddComponent } from './bookmark-add/bookmark-add.component';
import { BookmarkRemoveComponent } from './bookmark-remove/bookmark-remove.component';
import { BookmarkedDirective } from './bookmarked.directive';

@NgModule({
  declarations: [
    BookmarkAddComponent,
    BookmarkRemoveComponent,
    BookmarkedDirective,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BookmarkAddComponent,
    BookmarkRemoveComponent,
    BookmarkedDirective,
  ]
})
export class BookmarksModule { }
