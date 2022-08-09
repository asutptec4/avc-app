import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { TranslateModule } from '@ngx-translate/core';

import { BreadcrumbsModule } from '../ui/breadcrumbs/breadcrumbs.module';
import { CourseDeleteDialogComponent } from './course-delete-dialog/course-delete-dialog.component';
import { CourseItemComponent } from './course-item/course-item.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesToolbarComponent } from './courses-toolbar/courses-toolbar.component';
import { CoursesViewerComponent } from './courses-viewer/courses-viewer.component';
import { CoursesComponent } from './courses.component';
import { CoursesServiceModule } from './services/courses-service.module';
import { CoursesSharedModule } from './shared/courses-shared.module';

@NgModule({
  declarations: [
    CoursesComponent,
    CoursesToolbarComponent,
    CoursesViewerComponent,
    CourseItemComponent,
    CoursesListComponent,
    CourseDeleteDialogComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    CoursesRoutingModule,
    CoursesServiceModule,
    CoursesSharedModule,
    BreadcrumbsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    TranslateModule
  ]
})
export class CoursesModule {}
