import { Injectable } from '@angular/core';
import faker from '@faker-js/faker';

import { CourseEntity, NewCourse, UpdatedCourse } from '../common';

function generateMockCourses(count: number): CourseEntity[] {
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
  return result;
}

@Injectable()
export class CoursesService {
  private courseList: CourseEntity[] = [...this.generateCourses(3)];

  getAll(): CourseEntity[] {
    console.log('get all - ', this.courseList);
    return [...this.courseList];
  }

  create(newCourse: NewCourse): CourseEntity {
    const course: CourseEntity = { ...newCourse, id: faker.datatype.uuid(), creationDate: new Date(), topRated: false };
    this.courseList.push(course);
    return course;
  }

  getById(id: string): CourseEntity | undefined {
    return this.courseList.find((c) => c.id === id);
  }

  update(updatedCourse: UpdatedCourse): CourseEntity {
    const course = this.courseList.find((c) => c.id === updatedCourse.id);
    if (!course) {
      throw new Error(`Cannot find the course ${updatedCourse.id}`);
    }
    course.title = updatedCourse.title;
    course.description = updatedCourse.description;
    course.duration = updatedCourse.duration;
    course.topRated = updatedCourse.topRated;
    return course;
  }

  remove(id: string): void {
    this.courseList = this.courseList.filter((c) => c.id !== id);
  }

  loadMoreCourses() {
    this.courseList = [...this.courseList, ...this.generateCourses(3)];
  }

  // TODO: remove
  private generateCourses(count: number): CourseEntity[] {
    return generateMockCourses(count);
  }
}
