import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesViewerComponent } from './courses-viewer.component';

describe('CoursesViewerComponent', () => {
  let component: CoursesViewerComponent;
  let fixture: ComponentFixture<CoursesViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoursesViewerComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
