import { AbstractControl, ValidationErrors } from '@angular/forms';

const startsWithLetter = (uppercaseOnly = false) => (control: AbstractControl): ValidationErrors | null => {
  const rule = uppercaseOnly
    ? /^[A-Z]/
    : /^[a-zA-Z]/;

  return (!control.value || rule.test(control.value))
    ? null
    : {
    startsWithLetter: true
    // startsWithLetter: {char: control.value[0]}
  };
};

export { startsWithLetter };
