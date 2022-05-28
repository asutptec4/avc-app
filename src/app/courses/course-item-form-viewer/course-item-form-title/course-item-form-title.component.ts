import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-course-item-form-title',
  templateUrl: './course-item-form-title.component.html',
  styleUrls: ['./course-item-form-title.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseItemFormTitleComponent {
  @Input() control!: FormControl | null;

  getErrorMessage(): string {
    if (this.control?.hasError('required')) {
      return 'Please add course title';
    } else if (this.control?.hasError('maxlength')) {
      return 'Title must be less 50 characters';
    } else {
      return '';
    }
  }
}
