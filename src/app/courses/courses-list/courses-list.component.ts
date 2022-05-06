import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { tap } from 'rxjs';
import { AuthService } from '../../core/auth/auth.service';

import { CourseEntity } from '../common';
import { CoursesService } from '../service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoursesListComponent implements OnInit, OnChanges {
  @Input() searchKey: string = '';
  courses: CourseEntity[] = [];
  isLoadDisabled: boolean = false;
  noDataTitle = 'No data. Feel free to add new course.';
  private startIndex: number = 0;
  private count: number = 4;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private coursesService: CoursesService,
    private readonly changeDetectorRef: ChangeDetectorRef,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.fetchAndUpdateCourses();
  }

  private fetchAndUpdateCourses(): void {
    this.coursesService
      .getAll({ start: this.startIndex, count: this.count })
      .pipe(
        tap((courses) => {
          this.updateCourses(courses);
        })
      )
      .subscribe();
  }

  private updateCourses(courses: CourseEntity[]): void {
    if (courses.length === this.count) {
      courses.pop();
    } else {
      this.isLoadDisabled = true;
    }
    this.courses = this.courses.concat(courses);
    this.changeDetectorRef.markForCheck();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes && changes['searchKey'] && !changes['searchKey'].firstChange) {
      this.makeSearch();
    }
  }

  private makeSearch(): void {
    if (this.searchKey === '') {
      this.resetCourses();
    } else {
      this.fetchBySearch();
    }
  }

  private resetCourses(): void {
    this.courses = [];
    this.startIndex = 0;
    this.isLoadDisabled = false;
    this.fetchAndUpdateCourses();
  }

  private fetchBySearch() {
    this.coursesService
      .getAll({ textFragment: this.searchKey })
      .pipe(
        tap((courses) => {
          this.courses = courses;
          this.isLoadDisabled = true;
          this.changeDetectorRef.markForCheck();
        })
      )
      .subscribe();
  }

  onLoadMoreClick(): void {
    this.startIndex += this.count - 1;
    this.fetchAndUpdateCourses();
  }

  onDeleteAction(course: CourseEntity): void {
    if (this.authService.isUserAuthenticated()) {
      const confirm = window.confirm(`Are you sure you want to delete this ${course.name}?`);
      if (confirm) {
        this.coursesService
          .remove(course.id)
          .pipe(
            tap(() => {
              this.makeSearch();
            })
          )
          .subscribe();
      }
    }
  }

  onEditAction(course: CourseEntity): void {
    this.router.navigate([course.id], { relativeTo: this.activatedRoute });
  }

  courseTrackByFn(index: number, course: CourseEntity): string {
    return course.id;
  }
}
