import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { CoursesToolbarComponent } from './courses-toolbar.component';

describe('CoursesToolbarComponent', () => {
  let component: CoursesToolbarComponent;
  let fixture: ComponentFixture<CoursesToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoursesToolbarComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call onSearchClick', () => {
    const button = fixture.debugElement.query(By.css(`[automation-id="courses-toolbar-search-button"]`));
    button.triggerEventHandler('click', null);
    expect(component).toBeTruthy();
  });

  it('should call onAddClick', () => {
    const button = fixture.debugElement.query(By.css(`[automation-id="courses-toolbar-controls-add-button"]`));
    button.triggerEventHandler('click', null);
    expect(component).toBeTruthy();
  });
});
