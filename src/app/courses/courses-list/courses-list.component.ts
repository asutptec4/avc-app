import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import faker from '@faker-js/faker';

import { CourseEntity } from '../common';

function generateCourses(count: number): CourseEntity[] {
  const result = [];
  for (let i = 0; i < count; i++) {
    const course: CourseEntity = {
      id: faker.datatype.uuid(),
      title: faker.lorem.sentence(),
      creationDate: faker.date.between('2022-01-01T00:00:00.000Z', '2022-04-01T00:00:00.000Z'),
      description: faker.lorem.paragraphs(3),
      duration: faker.datatype.number(360),
      topRated: faker.datatype.boolean()
    };
    result.push(course);
  }
  console.log(result);
  return result;
}

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoursesListComponent {
  @Input() searchKey: string = '';
  courses: CourseEntity[] = [...generateCourses(3)];
  noDataTitle = 'No data. Feel free to add new course.';

  constructor(private router: Router) {}

  onLoadMoreClick(): void {
    this.courses = [...this.courses, ...generateCourses(3)];
  }

  onDeleteAction(course: CourseEntity): void {
    this.courses = this.courses.filter((c) => c.id !== course.id);
  }

  onEditAction(course: CourseEntity): void {
    this.router.navigate([course.id]);
  }

  courseTrackByFn(index: number, course: CourseEntity): string {
    return course.id;
  }
}
