import { Injectable } from '@angular/core';
import { Action, Store } from '@ngrx/store';

import { init, loadMoreCourses, searchCourses, selectCoursesList, selectHasCourses, selectIsLoadMoreDisabled } from '.';

@Injectable()
export class CoursesFacade {
  courses = this.store.select(selectCoursesList);
  hasCourses = this.store.select(selectHasCourses);
  isLoadMoreDisabled = this.store.select(selectIsLoadMoreDisabled);

  constructor(private readonly store: Store) {}

  initCoursesPage(): void {
    this.dispatch(init());
  }

  searchCourses(search: string): void {
    this.dispatch(searchCourses({ search }));
  }

  loadMoreCourses(): void {
    this.dispatch(loadMoreCourses());
  }

  private dispatch(action: Action): void {
    this.store.dispatch(action);
  }
}
