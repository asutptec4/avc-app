import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

@Component({
  selector: 'app-course-item-form-title',
  templateUrl: './course-item-form-title.component.html',
  styleUrls: ['./course-item-form-title.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseItemFormTitleComponent {
  @Input() control!: UntypedFormControl | null;

  getErrorMessage(): string {
    if (this.control?.hasError('required')) {
      return 'COURSE_FORM.TITLE_FIELD.REQUIRED';
    } else if (this.control?.hasError('maxlength')) {
      return 'COURSE_FORM.TITLE_FIELD.MAX';
    } else {
      return '';
    }
  }
}
