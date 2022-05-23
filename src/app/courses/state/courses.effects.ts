import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';

import { CoursesDataService } from '../services/courses-data.service';
import * as CoursesActions from './courses.actions';
import { selectCoursesList } from './courses.reducer';

const DISPLAY_COUNT = 3;

@Injectable()
export class CoursesEffects {
  init = createEffect(() => {
    return this.actions.pipe(
      ofType(CoursesActions.init),
      exhaustMap(() =>
        this.coursesDataService.getAll({ start: 0, count: DISPLAY_COUNT + 1 }).pipe(
          map((courses) => CoursesActions.addCourses({ courses })),
          catchError(() => of(CoursesActions.addCourses({ courses: [] })))
        )
      )
    );
  });

  searchCourses = createEffect(() => {
    return this.actions.pipe(
      ofType(CoursesActions.searchCourses),
      map((action) => action.search),
      exhaustMap((search: string) =>
        this.coursesDataService.getAll({ textFragment: search }).pipe(
          map((courses) => CoursesActions.updateCoursesAndDisableLoadMore({ courses })),
          catchError(() => of(CoursesActions.updateCoursesAndDisableLoadMore({ courses: [] })))
        )
      )
    );
  });

  loadMoreCourses = createEffect(() => {
    return this.actions.pipe(
      ofType(CoursesActions.loadMoreCourses),
      concatLatestFrom(() => this.store.select(selectCoursesList)),
      exhaustMap(([_, courses]) =>
        this.coursesDataService.getAll({ start: courses.length, count: DISPLAY_COUNT + 1 }).pipe(
          map((courses) => CoursesActions.addCourses({ courses })),
          catchError(() => of(CoursesActions.addCourses({ courses: [] })))
        )
      )
    );
  });

  updateLoadMore = createEffect(() => {
    return this.actions.pipe(
      ofType(CoursesActions.addCourses),
      map((action) => action.courses),
      map((courses) => {
        return courses.length > DISPLAY_COUNT ? CoursesActions.loadMoreEnable() : CoursesActions.loadMoreDisable();
      })
    );
  });

  updateCourses = createEffect(() => {
    return this.actions.pipe(
      ofType(CoursesActions.addCourses),
      map((action) => action.courses),
      concatLatestFrom(() => this.store.select(selectCoursesList)),
      map(([newCourses, currentCourses]) => {
        return CoursesActions.updateCourses({
          courses: currentCourses.concat(
            newCourses.length > DISPLAY_COUNT ? newCourses.slice(0, DISPLAY_COUNT) : newCourses
          )
        });
      })
    );
  });

  constructor(private actions: Actions, private coursesDataService: CoursesDataService, private store: Store) {}
}
