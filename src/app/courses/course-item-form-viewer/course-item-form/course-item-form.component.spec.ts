import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseItemFormComponent } from './course-item-form.component';

describe('CourseItemFormComponent', () => {
  let component: CourseItemFormComponent;
  let fixture: ComponentFixture<CourseItemFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CourseItemFormComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseItemFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
