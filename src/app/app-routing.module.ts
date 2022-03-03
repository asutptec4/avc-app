import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './ui/layout/layout.component';
import { LayoutModule } from './ui/layout/layout.module';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'login',
        loadChildren: (): Promise<any> => import('./login/login.module').then((modules) => modules.LoginModule)
      },
      {
        path: 'courses',
        loadChildren: (): Promise<any> => import('./courses/courses.module').then((modules) => modules.CoursesModule)
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'courses'
      },
      {
        path: '**',
        loadChildren: (): Promise<any> =>
          import('./not-found/not-found.module').then((modules) => modules.NotFoundModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), LayoutModule],
  exports: [RouterModule]
})
export class AppRoutingModule {}
