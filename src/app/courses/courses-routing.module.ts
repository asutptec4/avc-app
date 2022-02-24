import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CourseItemFormViewerComponent } from './course-item-form-viewer/course-item-form-viewer.component';
import { CoursesViewerComponent } from './courses-viewer/courses-viewer.component';
import { CoursesComponent } from './courses.component';

const routes: Routes = [
  {
    path: 'courses',
    component: CoursesComponent,
    children: [
      {
        path: '',
        component: CoursesViewerComponent
      },
      {
        path: 'new',
        loadChildren: () =>
          import('./course-item-form-viewer/course-item-form-viewer.module').then(
            (mod) => mod.CourseItemFormViewerModule
          )
      },
      {
        path: ':id',
        loadChildren: () =>
          import('./course-item-form-viewer/course-item-form-viewer.module').then(
            (mod) => mod.CourseItemFormViewerModule
          )
      }
    ]
  },
  {
    path: '',
    redirectTo: 'courses'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule {}
