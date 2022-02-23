import { Component, Input } from '@angular/core';

import { CourseEntity } from '../common';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent {
  @Input() courses!: CourseEntity[];

  onLoadMoreClick(): void {
    console.log('onLoadMoreClick');
  }

  onDeleteAction(course: CourseEntity): void {
    console.log(course.id);
  }

  onEditAction(course: CourseEntity): void {
    console.log(course.id);
  }

  courseTrackByFn(index: number, course: CourseEntity): string {
    return course.id;
  }
}
