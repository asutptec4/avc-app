import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, map, Subject, switchMap, tap } from 'rxjs';

import { BreadcrumbsService } from '../../ui/breadcrumbs/breadcrumbs.service';
import { CourseEntity } from '../common';
import { CoursesDataService } from '../service';

@Component({
  selector: 'app-course-item-form-viewer',
  templateUrl: './course-item-form-viewer.component.html',
  styleUrls: ['./course-item-form-viewer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseItemFormViewerComponent implements OnDestroy {
  course: CourseEntity = {} as CourseEntity;

  private readonly destroy = new Subject<void>();

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private coursesService: CoursesDataService,
    private breadcrumbsService: BreadcrumbsService
  ) {
    this.activatedRoute.params
      .pipe(
        filter((params) => params['id']),
        map((params) => params['id']),
        switchMap((id) => this.coursesService.getById(id)),
        tap((course) => {
          if (course) {
            this.breadcrumbsService.updateCrumbs(['Courses', course.name]);
            this.course = course;
          } else {
            this.breadcrumbsService.updateCrumbs(['Courses', 'New']);
          }
        })
      )
      .subscribe();
  }

  onSaveClick(): void {
    this.router.navigate(['']);
    this.breadcrumbsService.updateCrumbs(['Courses']);
  }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}
