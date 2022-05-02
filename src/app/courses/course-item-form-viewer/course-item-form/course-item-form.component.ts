import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { CourseEntity } from '../../common';

@Component({
  selector: 'app-course-item-form',
  templateUrl: './course-item-form.component.html',
  styleUrls: ['./course-item-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseItemFormComponent {
  @Input() course!: CourseEntity;
}
