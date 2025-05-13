import { AbstractControl, ValidationErrors, ValidatorFn, Validators } from "@angular/forms";

export class CustomValidators extends Validators {
  static mustBeEqual(firstControlName: string, secondControlName: string): ValidatorFn {
    return (form: AbstractControl): ValidationErrors | null => {
      const firstControl = form.get(firstControlName);
      const secondControl = form.get(secondControlName);
      return firstControl?.value === secondControl?.value ? null : {mustBeEqual: true};
    }
  }
}
