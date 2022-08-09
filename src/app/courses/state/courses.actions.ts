import { createAction, props } from '@ngrx/store';

import { CourseEntity } from '../common';

export const init = createAction('[Courses] Init Courses Page');

export const addCourses = createAction('[Courses] Add Courses', props<{ courses: CourseEntity[] }>());

export const updateCourses = createAction('[Courses] Update Courses', props<{ courses: CourseEntity[] }>());

export const updateCoursesAndDisableLoadMore = createAction(
  '[Courses] Update Courses And Disable Load More',
  props<{ courses: CourseEntity[] }>()
);

export const searchCourses = createAction('[Courses] Search Courses', props<{ search: string }>());

export const loadMoreCourses = createAction('[Courses] Load More Courses');

export const loadMoreEnable = createAction('[Courses] Load More Enable');

export const loadMoreDisable = createAction('[Courses] Load More Disabled');
