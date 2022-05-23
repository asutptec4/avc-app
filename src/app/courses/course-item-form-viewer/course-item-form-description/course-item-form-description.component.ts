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
}
