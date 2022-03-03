import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CourseEntity } from '../common';
import { CoursesService } from '../service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoursesListComponent implements OnInit {
  @Input() searchKey: string = '';
  courses: CourseEntity[] = [];
  noDataTitle = 'No data. Feel free to add new course.';

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private coursesService: CoursesService) {}

  ngOnInit(): void {
    this.courses = this.coursesService.getAll();
  }

  onLoadMoreClick(): void {
    this.coursesService.loadMoreCourses();
    this.courses = this.coursesService.getAll();
  }

  onDeleteAction(course: CourseEntity): void {
    const confirm = window.confirm(`Are you sure you want to delete this ${course.title}?`);
    if (confirm) {
      this.coursesService.remove(course.id);
      this.courses = this.coursesService.getAll();
    }
  }

  onEditAction(course: CourseEntity): void {
    this.router.navigate([course.id], { relativeTo: this.activatedRoute });
  }

  courseTrackByFn(index: number, course: CourseEntity): string {
    return course.id;
  }
}
