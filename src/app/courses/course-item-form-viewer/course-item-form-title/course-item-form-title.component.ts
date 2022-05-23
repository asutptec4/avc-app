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
}
