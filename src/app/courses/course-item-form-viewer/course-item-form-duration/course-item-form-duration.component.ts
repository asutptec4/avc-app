import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-course-item-form-duration',
  templateUrl: './course-item-form-duration.component.html',
  styleUrls: ['./course-item-form-duration.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseItemFormDurationComponent {
  @Input() control!: FormControl | null;

  getErrorMessage(): string {
    if (this.control?.hasError('required')) {
      return 'Please add course duration';
    } else if (this.control?.hasError('min')) {
      return 'Duration must be greater than 0 minutes';
    } else if (this.control?.hasError('pattern')) {
      return 'Duration must be a number';
    } else {
      return '';
    }
  }
}
