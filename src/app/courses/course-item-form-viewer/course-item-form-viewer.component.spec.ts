import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseItemFormViewerComponent } from './course-item-form-viewer.component';

describe('CourseItemFormViewerComponent', () => {
  let component: CourseItemFormViewerComponent;
  let fixture: ComponentFixture<CourseItemFormViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CourseItemFormViewerComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseItemFormViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
