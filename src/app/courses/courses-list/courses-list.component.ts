import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, tap } from 'rxjs';

import { AuthService } from '../../core/auth';
import { GlobalSpinnerFacade } from '../../core/spinner/global-spinner/state/global-spinner.facade';
import { CourseEntity } from '../common';
import { CoursesDataService, CoursesFacade } from '../services';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoursesListComponent implements OnInit, OnChanges {
  @Input() searchKey: string = '';
  courses: Observable<CourseEntity[]> = this.coursesService.courses;
  hasCourses: Observable<boolean> = this.coursesService.hasCourses;
  isActionsDisabled: Observable<boolean> = this.authService.isAuthenticated;
  isLoadMoreDisabled: Observable<boolean> = this.coursesService.isLoadMoreDisabled;
  noDataTitle = 'No data. Feel free to add new course.';

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
    private coursesService: CoursesFacade,
    private coursesDataService: CoursesDataService,
    private globalSpinnerService: GlobalSpinnerFacade
  ) {}

  ngOnInit(): void {
    this.coursesService.initCoursesPage();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes && changes['searchKey'] && !changes['searchKey'].firstChange) {
      this.makeSearch();
    }
  }

  private makeSearch(): void {
    if (this.searchKey === '') {
      this.coursesService.initCoursesPage();
    } else {
      this.coursesService.searchCourses(this.searchKey);
    }
  }

  onLoadMoreClick(): void {
    this.coursesService.loadMoreCourses();
  }

  onDeleteAction(course: CourseEntity): void {
    this.deleteCourse(course);
  }

  private deleteCourse(course: CourseEntity): void {
    const confirm = window.confirm(`Are you sure you want to delete this ${course.name}?`);
    if (confirm) {
      this.globalSpinnerService.show();
      this.coursesDataService
        .remove(course.id)
        .pipe(
          tap(() => {
            this.makeSearch();
          }),
          tap(() => this.globalSpinnerService.hide())
        )
        .subscribe();
    }
  }

  onEditAction(course: CourseEntity): void {
    this.router.navigate([course.id], { relativeTo: this.activatedRoute });
  }

  courseTrackByFn(index: number, course: CourseEntity): string {
    return course.id;
  }
}
