import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { HttpClientModule } from '@angular/common/http';
import { PosterComponent } from './poster/poster.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BookmarksModule } from '../bookmarks/bookmarks.module';
import { ShowDetailsComponent } from './show-details/show-details.component';
import { RouterModule } from '@angular/router';
import { EpisodisePipe } from './episodise.pipe';

@NgModule({
  declarations: [
    SearchComponent,
    PosterComponent,
    ShowDetailsComponent,
    EpisodisePipe,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    BookmarksModule,
  ]
})
export class TvModule { }
