import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { CourseApiParams, CourseEntity, NewCourse } from '../common';

@Injectable()
export class CoursesDataService {
  constructor(private http: HttpClient) {}

  getAll(params: CourseApiParams): Observable<CourseEntity[]> {
    const httpParams = new HttpParams({ fromObject: { ...params } });
    return this.http.get<CourseEntity[]>('http://localhost:3004/courses', { params: httpParams }).pipe(
      map((list) => {
        return list.map((c) => {
          c.date = new Date(c.date);
          return c;
        });
      })
    );
  }

  create(newCourse: NewCourse): Observable<CourseEntity> {
    return this.http.post<CourseEntity>('http://localhost:3004/courses', newCourse);
  }

  getById(id: string): Observable<CourseEntity> {
    return this.getAll({ id }).pipe(map((list) => list[0]));
  }

  update(updatedCourse: CourseEntity): Observable<CourseEntity> {
    return this.http.put<CourseEntity>('http://localhost:3004/courses', updatedCourse);
  }

  remove(id: string): Observable<Object> {
    return this.http.delete(`http://localhost:3004/courses/${id}`);
  }
}
