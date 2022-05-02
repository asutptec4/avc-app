import { ChangeDetectionStrategy, Component, Input, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, map, Subject } from 'rxjs';
import { BreadcrumbsService } from '../../ui/breadcrumbs/breadcrumbs.service';

import { CourseEntity } from '../common';
import { CoursesService } from '../service';

@Component({
  selector: 'app-course-item-form-viewer',
  templateUrl: './course-item-form-viewer.component.html',
  styleUrls: ['./course-item-form-viewer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseItemFormViewerComponent implements OnDestroy {
  course: CourseEntity = {} as CourseEntity;

  private readonly destroy$ = new Subject<void>();

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private coursesService: CoursesService,
    private breadcrumbsService: BreadcrumbsService
  ) {
    this.activatedRoute.params
      .pipe(
        filter((params) => params['id']),
        map((params) => params['id'])
      )
      .subscribe((id) => {
        const course = this.coursesService.getById(id);
        if (course) {
          this.breadcrumbsService.updateCrumbs(['Courses', course.title]);
          this.course = course;
        }
      });
  }

  onSaveClick(): void {
    this.router.navigate(['']);
    this.breadcrumbsService.updateCrumbs(['Courses']);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
