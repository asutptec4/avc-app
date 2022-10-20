import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

@Component({
  selector: 'app-course-item-form-duration',
  templateUrl: './course-item-form-duration.component.html',
  styleUrls: ['./course-item-form-duration.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseItemFormDurationComponent {
  @Input() control!: UntypedFormControl | null;

  getErrorMessage(): string {
    if (this.control?.hasError('required')) {
      return 'COURSE_FORM.DURATION_FIELD.REQUIRED';
    } else if (this.control?.hasError('min')) {
      return 'COURSE_FORM.DURATION_FIELD.MIN';
    } else if (this.control?.hasError('pattern')) {
      return 'COURSE_FORM.DURATION_FIELD.PATTERN';
    } else {
      return '';
    }
  }
}
