import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BreadcrumbsModule } from '../ui/breadcrumbs/breadcrumbs.module';
import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses.component';
import { CoursesToolbarComponent } from './courses-toolbar/courses-toolbar.component';
import { CoursesViewerComponent } from './courses-viewer/courses-viewer.component';
import { CourseItemComponent } from './course-item/course-item.component';

@NgModule({
  declarations: [CoursesComponent, CoursesToolbarComponent, CoursesViewerComponent, CourseItemComponent],
  imports: [CommonModule, CoursesRoutingModule, BreadcrumbsModule]
})
export class CoursesModule {}
