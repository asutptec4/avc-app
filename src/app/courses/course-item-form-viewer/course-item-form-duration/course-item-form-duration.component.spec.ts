import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseItemFormDurationComponent } from './course-item-form-duration.component';

describe('CourseItemFormDurationComponent', () => {
  let component: CourseItemFormDurationComponent;
  let fixture: ComponentFixture<CourseItemFormDurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CourseItemFormDurationComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseItemFormDurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
