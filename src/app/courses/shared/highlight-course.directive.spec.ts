import { Component, CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseEntity } from '../common';
import {
  FRESH_COURSE_BORDER_COLOR,
  HighlightCourseDirective,
  UPCOMING_COURSE_BORDER_COLOR
} from './highlight-course.directive';

@Component({
  template: `<div appHighlightCourse [course]="course">About</div> `
})
class TestComponent {
  @Input() course!: CourseEntity;
}

describe('HighlightCourseDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestComponent, HighlightCourseDirective],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    expect(component).toBeTruthy();
  });

  it('should set border for upcoming courses', () => {
    const creationDate = new Date();
    creationDate.setDate(creationDate.getDate() + 1);
    component.course = { date: creationDate } as CourseEntity;
    fixture.detectChanges();
    const div: HTMLElement = fixture.nativeElement.querySelector('div');
    expect(div.style.borderColor).toBe(UPCOMING_COURSE_BORDER_COLOR);
  });

  it('should set border for recent courses', () => {
    const creationDate = new Date();
    creationDate.setDate(creationDate.getDate() - 1);
    component.course = { date: creationDate } as CourseEntity;
    fixture.detectChanges();
    const div: HTMLElement = fixture.nativeElement.querySelector('div');
    expect(div.style.borderColor).toBe(FRESH_COURSE_BORDER_COLOR);
  });

  it('should not set border for old courses', () => {
    const creationDate = new Date();
    creationDate.setDate(creationDate.getDate() - 16);
    component.course = { date: creationDate } as CourseEntity;
    fixture.detectChanges();
    const div: HTMLElement = fixture.nativeElement.querySelector('div');
    expect(div.style.borderColor).toBe('');
  });
});
