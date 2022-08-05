import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { CoursesEffects, CoursesFacade, coursesFeature } from '../state';
import { CoursesDataService } from './courses-data.service';

@NgModule({
  imports: [StoreModule.forFeature(coursesFeature), EffectsModule.forFeature([CoursesEffects])],
  providers: [CoursesDataService, CoursesFacade]
})
export class CoursesServiceModule {}
