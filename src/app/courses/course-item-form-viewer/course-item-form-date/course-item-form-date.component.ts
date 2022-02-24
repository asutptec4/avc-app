import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-course-item-form-date',
  templateUrl: './course-item-form-date.component.html',
  styleUrls: ['./course-item-form-date.component.scss']
})
export class CourseItemFormDateComponent {
  @Input() date: Date = new Date();
}
