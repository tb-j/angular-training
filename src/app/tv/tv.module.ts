import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { HttpClientModule } from '@angular/common/http';
import { PosterComponent } from './poster/poster.component';

@NgModule({
  declarations: [SearchComponent, PosterComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class TvModule { }
