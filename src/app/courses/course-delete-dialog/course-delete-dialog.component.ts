import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { CourseEntity } from '../common';

export interface CourseDeleteDialogData {
  course: CourseEntity;
}

@Component({
  selector: 'app-course-delete-dialog',
  templateUrl: './course-delete-dialog.component.html',
  styleUrls: ['./course-delete-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseDeleteDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: CourseDeleteDialogData) {}
}
