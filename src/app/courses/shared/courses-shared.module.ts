import { NgModule } from '@angular/core';

import { HighlightCourseDirective } from './highlight-course.directive';
import { DurationPipe } from './duration.pipe';
import { OrderByPipe } from './order-by.pipe';
import { FilterPipe } from './filter.pipe';
import { ExtractFormControlPipe } from './extract-form-control.pipe';

const exportList = [HighlightCourseDirective, DurationPipe, OrderByPipe, FilterPipe, ExtractFormControlPipe];

@NgModule({
  declarations: [...exportList],
  exports: [...exportList]
})
export class CoursesSharedModule {}
