import { AbstractControl, ValidationErrors } from '@angular/forms';

export function startsWithLetter(control: AbstractControl): ValidationErrors | null {
  const rule = /^[a-zA-Z]/;

  return (!control.value || rule.test(control.value))
    ? null
    : {
    startsWithLetter: true
    // startsWithLetter: {char: control.value[0]}
  };
}
