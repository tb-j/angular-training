import { Component } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'tm-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contact = {
    email: '',
    message: '',
  };

  showErrors(control: AbstractControl): boolean {
    return (control.touched || control.dirty) && control.invalid;
  }
}
