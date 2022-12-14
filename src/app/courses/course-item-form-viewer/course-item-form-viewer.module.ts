import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { TranslateModule } from '@ngx-translate/core';

import { CoursesSharedModule } from '../shared/courses-shared.module';
import { CourseItemFormAuthorComponent } from './course-item-form-author/course-item-form-author.component';
import { CourseItemFormDateComponent } from './course-item-form-date/course-item-form-date.component';
import { CourseItemFormDescriptionComponent } from './course-item-form-description/course-item-form-description.component';
import { CourseItemFormDurationComponent } from './course-item-form-duration/course-item-form-duration.component';
import { CourseItemFormTitleComponent } from './course-item-form-title/course-item-form-title.component';
import { CourseItemFormViewerRoutingModule } from './course-item-form-viewer-routing.module';
import { CourseItemFormViewerComponent } from './course-item-form-viewer.component';

@NgModule({
  declarations: [
    CourseItemFormViewerComponent,
    CourseItemFormAuthorComponent,
    CourseItemFormTitleComponent,
    CourseItemFormDescriptionComponent,
    CourseItemFormDurationComponent,
    CourseItemFormDateComponent
  ],
  imports: [
    CommonModule,
    CourseItemFormViewerRoutingModule,
    CoursesSharedModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatChipsModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    TranslateModule
  ]
})
export class CourseItemFormViewerModule {}
