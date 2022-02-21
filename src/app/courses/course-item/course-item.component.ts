import { Component, Input, OnInit } from '@angular/core';

import { CourseEntity } from '../common';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss']
})
export class CourseItemComponent implements OnInit {
  @Input() course!: CourseEntity;

  constructor() {}

  ngOnInit(): void {}
}
