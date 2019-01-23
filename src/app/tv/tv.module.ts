import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { HttpClientModule } from '@angular/common/http';
import { PosterComponent } from './poster/poster.component';
import { FormsModule } from '@angular/forms';
import { BookmarksModule } from '../bookmarks/bookmarks.module';

@NgModule({
  declarations: [SearchComponent, PosterComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    BookmarksModule,
  ]
})
export class TvModule { }
