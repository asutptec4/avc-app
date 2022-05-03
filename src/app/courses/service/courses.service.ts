import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import faker from '@faker-js/faker';
import { map, Observable } from 'rxjs';

import { CourseApiParams, CourseEntity, NewCourse, UpdatedCourse } from '../common';

function generateMockCourses(count: number): CourseEntity[] {
  const result = [];
  for (let i = 0; i < count; i++) {
    const course: CourseEntity = {
      id: faker.datatype.uuid(),
      name: faker.lorem.sentence(),
      date: faker.date.between('2022-01-01T00:00:00.000Z', '2022-04-01T00:00:00.000Z'),
      description: faker.lorem.paragraphs(3),
      length: faker.datatype.number(360),
      isTopRated: faker.datatype.boolean(),
      authors: []
    };
    result.push(course);
  }
  return result;
}

@Injectable()
export class CoursesService {
  private courseList: CourseEntity[] = [...this.generateCourses(3)];

  constructor(private http: HttpClient) {}

  getAllMocked(): CourseEntity[] {
    console.log('get all - ', this.courseList);
    return [...this.courseList];
  }

  getAll(params: CourseApiParams): Observable<CourseEntity[]> {
    return this.http.get<CourseEntity[]>('http://localhost:3004/courses').pipe(
      map((list) => {
        return list.map((c) => {
          c.date = new Date(c.date);
          return c;
        });
      })
    );
  }

  create(newCourse: NewCourse): CourseEntity {
    const course: CourseEntity = {
      ...newCourse,
      id: faker.datatype.uuid(),
      date: new Date(),
      isTopRated: false,
      authors: []
    };
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
    course.name = updatedCourse.name;
    course.description = updatedCourse.description;
    course.length = updatedCourse.length;
    course.isTopRated = updatedCourse.isTopRated;
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
