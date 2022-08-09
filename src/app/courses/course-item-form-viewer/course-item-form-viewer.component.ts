import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, map, switchMap, tap } from 'rxjs';

import { BreadcrumbsService } from '../../ui/breadcrumbs/breadcrumbs.service';
import { CourseEntity } from '../common';
import { CoursesDataService } from '../services';

@Component({
  selector: 'app-course-item-form-viewer',
  templateUrl: './course-item-form-viewer.component.html',
  styleUrls: ['./course-item-form-viewer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseItemFormViewerComponent {
  course: CourseEntity = {} as CourseEntity;
  form = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.maxLength(50)]),
    description: new FormControl(null, [Validators.required, Validators.maxLength(500)]),
    date: new FormControl(null, Validators.required),
    length: new FormControl(null, [Validators.required, Validators.min(0), Validators.pattern(/^\d+$/)]),
    authors: new FormControl([], Validators.required)
  });

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private coursesService: CoursesDataService,
    private breadcrumbsService: BreadcrumbsService,
    private changeDetectorRef: ChangeDetectorRef
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
            this.form.patchValue(this.course);
            this.changeDetectorRef.markForCheck();
          } else {
            this.breadcrumbsService.updateCrumbs(['Courses', 'New']);
          }
        })
      )
      .subscribe();
  }

  onSaveClick(): void {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      this.coursesService
        .create(this.form.value)
        .pipe(
          tap(() => {
            this.navigateToMainPage();
          })
        )
        .subscribe();
    }
    this.changeDetectorRef.markForCheck();
  }

  private navigateToMainPage(): void {
    this.breadcrumbsService.updateCrumbs(['Courses']);
    this.router.navigate(['']);
  }

  onCancelClick(): void {
    this.navigateToMainPage();
  }
}
