import { Component, Input } from '@angular/core';

import { CourseEntity } from '../common';

@Component({
  selector: 'app-course-item-form-viewer',
  templateUrl: './course-item-form-viewer.component.html',
  styleUrls: ['./course-item-form-viewer.component.scss']
})
export class CourseItemFormViewerComponent {
  @Input() course: CourseEntity = {} as CourseEntity;
}
