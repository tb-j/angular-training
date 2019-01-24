import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ContactComponent, NotFoundComponent],
  imports: [
    CommonModule,
    FormsModule,
  ]
})
export class PagesModule { }
