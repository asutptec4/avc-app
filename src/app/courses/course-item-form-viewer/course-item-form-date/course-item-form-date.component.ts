import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-course-item-form-date',
  templateUrl: './course-item-form-date.component.html',
  styleUrls: ['./course-item-form-date.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseItemFormDateComponent {
  @Input() control!: FormControl | null;

  getErrorMessage(): string {
    return this.control?.hasError('required') ? 'COURSE_FORM.DATE_FIELD.REQUIRED' : '';
  }
}
