import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { startsWithLetter } from './starts-with-letter.validator';

@Directive({
  selector: '[tmStartsWithLetter]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: StartsWithLetterDirective,
    multi: true
  }]
})
export class StartsWithLetterDirective implements Validator {
  @Input('tmStartsWithLetter') uppercaseOnly = false;

  validate(control: AbstractControl): ValidationErrors | null {
    return startsWithLetter(this.uppercaseOnly)(control);
  }

}
