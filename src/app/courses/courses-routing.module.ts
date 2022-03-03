import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CoursesViewerComponent } from './courses-viewer/courses-viewer.component';
import { CoursesComponent } from './courses.component';

const routes: Routes = [
  {
    path: '',
    component: CoursesComponent,
    children: [
      {
        path: '',
        component: CoursesViewerComponent
      },
      {
        path: ':id',
        loadChildren: () =>
          import('./course-item-form-viewer/course-item-form-viewer.module').then(
            (mod) => mod.CourseItemFormViewerModule
          )
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule {}
