import { createFeature, createReducer, createSelector, on } from '@ngrx/store';

import { CourseEntity } from '../common';
import * as CoursesActions from './courses.actions';

interface State {
  courses: CourseEntity[];
  isLoadAvailable: boolean;
}

const initialState: State = {
  courses: [],
  isLoadAvailable: false
};

export const coursesFeature = createFeature({
  name: 'courses',
  reducer: createReducer(
    initialState,
    on(
      CoursesActions.updateCourses,
      (state, { courses }): State => ({
        ...state,
        courses
      })
    ),
    on(
      CoursesActions.loadMoreEnable,
      (state): State => ({
        ...state,
        isLoadAvailable: true
      })
    ),
    on(
      CoursesActions.loadMoreDisable,
      (state): State => ({
        ...state,
        isLoadAvailable: false
      })
    ),
    on(
      CoursesActions.updateCoursesAndDisableLoadMore,
      (state, { courses }): State => ({
        ...state,
        courses,
        isLoadAvailable: false
      })
    )
  )
});

export const { name, reducer, selectCoursesState, selectCourses, selectIsLoadAvailable } = coursesFeature;

export const selectCoursesList = createSelector(selectCourses, (list) => (Array.isArray(list) ? list : []));
export const selectIsLoadMoreDisabled = createSelector(selectIsLoadAvailable, (isLoadAvailable) => !isLoadAvailable);
export const selectHasCourses = createSelector(selectCoursesList, (list) => list.length > 0);
