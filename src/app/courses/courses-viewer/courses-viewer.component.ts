import { Component, OnInit } from '@angular/core';
import faker from '@faker-js/faker';

import { CourseEntity } from '../common';

function generateCourses(count: number): CourseEntity[] {
  const result = [];
  for (let i = 0; i < count; i++) {
    const course: CourseEntity = {
      id: faker.datatype.uuid(),
      title: faker.lorem.sentence(),
      creationDate: faker.date.recent(100),
      description: faker.lorem.paragraphs(3),
      duration: faker.datatype.number(360)
    };
    result.push(course);
  }
  return result;
}

@Component({
  selector: 'app-courses-viewer',
  templateUrl: './courses-viewer.component.html',
  styleUrls: ['./courses-viewer.component.scss']
})
export class CoursesViewerComponent implements OnInit {
  courses: CourseEntity[] = [];

  ngOnInit(): void {
    this.courses = [...generateCourses(3)];
  }
}
