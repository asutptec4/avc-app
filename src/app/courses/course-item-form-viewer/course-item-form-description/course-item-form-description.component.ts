import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-course-item-form-description',
  templateUrl: './course-item-form-description.component.html',
  styleUrls: ['./course-item-form-description.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseItemFormDescriptionComponent {
  @Input() control!: FormControl | null;

  getErrorMessage(): string {
    if (this.control?.hasError('required')) {
      return 'COURSE_FORM.DESCRIPTION_FIELD.REQUIRED';
    } else if (this.control?.hasError('maxlength')) {
      return 'COURSE_FORM.DESCRIPTION_FIELD.MAX';
    } else {
      return '';
    }
  }
}
