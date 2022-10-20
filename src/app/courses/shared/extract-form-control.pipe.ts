import { Pipe, PipeTransform } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';

@Pipe({
  name: 'extractFormControl'
})
export class ExtractFormControlPipe implements PipeTransform {
  transform(formGroup: UntypedFormGroup, controlName: string): UntypedFormControl | null {
    return (formGroup.get(controlName) as UntypedFormControl) ?? null;
  }
}
