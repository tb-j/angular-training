import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [ContactComponent, NotFoundComponent],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
