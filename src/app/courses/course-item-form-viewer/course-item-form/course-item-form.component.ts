import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-course-item-form',
  templateUrl: './course-item-form.component.html',
  styleUrls: ['./course-item-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseItemFormComponent {}
