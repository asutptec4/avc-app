import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../core/auth/auth.guard';
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
        canActivate: [AuthGuard],
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
