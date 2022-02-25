import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HighlightCourseDirective } from './highlight-course.directive';
import { DurationPipe } from './duration.pipe';
import { OrderByPipe } from './order-by.pipe';
import { FilterPipe } from './filter.pipe';

const exportList = [HighlightCourseDirective, DurationPipe, OrderByPipe, FilterPipe];

@NgModule({
  declarations: [...exportList],
  imports: [CommonModule],
  exports: [...exportList]
})
export class SharedModule {}
