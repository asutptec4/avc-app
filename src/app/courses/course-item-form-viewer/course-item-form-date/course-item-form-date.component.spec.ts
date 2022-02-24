import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseItemFormDateComponent } from './course-item-form-date.component';

describe('CourseItemFormDateComponent', () => {
  let component: CourseItemFormDateComponent;
  let fixture: ComponentFixture<CourseItemFormDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CourseItemFormDateComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseItemFormDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
