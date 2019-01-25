import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './loading/loading.component';
import { StartsWithLetterDirective } from './forms/starts-with-letter.directive';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoadingComponent, StartsWithLetterDirective],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    LoadingComponent,
    StartsWithLetterDirective,
    CommonModule,
    FormsModule,
  ]
})
export class SharedModule { }
