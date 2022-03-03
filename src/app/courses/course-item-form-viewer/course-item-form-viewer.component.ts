import { ChangeDetectionStrategy, Component, Input, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter, map, Subject } from 'rxjs';

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

  constructor(private activatedRoute: ActivatedRoute, private coursesService: CoursesService) {
    this.activatedRoute.params
      .pipe(
        filter((params) => params['id']),
        map((params) => params['id'])
      )
      .subscribe((id) => {
        const course = this.coursesService.getById(id);
        if (course) {
          this.course = course;
        }
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
