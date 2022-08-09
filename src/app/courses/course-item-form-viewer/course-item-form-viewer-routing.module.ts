import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CourseItemFormViewerComponent } from './course-item-form-viewer.component';

const routes: Routes = [
  {
    path: '',
    component: CourseItemFormViewerComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseItemFormViewerRoutingModule {}
