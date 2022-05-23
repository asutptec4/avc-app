import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, map, Subject, switchMap, takeUntil, tap } from 'rxjs';

import { BreadcrumbsService } from '../../ui/breadcrumbs/breadcrumbs.service';
import { CourseEntity } from '../common';
import { CoursesDataService } from '../service';

@Component({
  selector: 'app-course-item-form-viewer',
  templateUrl: './course-item-form-viewer.component.html',
  styleUrls: ['./course-item-form-viewer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseItemFormViewerComponent implements OnInit, OnDestroy {
  course: CourseEntity = {} as CourseEntity;
  form = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.maxLength(50)]),
    description: new FormControl(null, [Validators.required, Validators.maxLength(500)]),
    date: new FormControl(null, Validators.required),
    length: new FormControl(null, [Validators.required, Validators.min(0)]),
    authors: new FormControl([], Validators.required)
  });

  private readonly destroy = new Subject<void>();

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

  ngOnInit(): void {
    this.form.valueChanges
      .pipe(
        tap(() => {
          this.changeDetectorRef.markForCheck();
        }),
        takeUntil(this.destroy)
      )
      .subscribe();
  }

  onSaveClick(): void {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      this.breadcrumbsService.updateCrumbs(['Courses']);
      this.router.navigate(['']);
    }
    this.changeDetectorRef.markForCheck();
  }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}
