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
  duration: number = 0;
}
