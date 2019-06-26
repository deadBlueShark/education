import { FormControl } from '@angular/forms';

export class ProductValidator {
  static emailFormat(control: FormControl): { [key: string]: boolean } {
    return !control.value.match(/@/) ? { emailFormat: true } : null;
  }
}
