import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesViewerComponent } from './courses-viewer.component';

describe('CoursesViewerComponent', () => {
  let component: CoursesViewerComponent;
  let fixture: ComponentFixture<CoursesViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoursesViewerComponent]
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
