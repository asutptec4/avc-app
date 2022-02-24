import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import faker from '@faker-js/faker';
import { CourseEntity } from '../common';
import { CourseItemComponent } from '../course-item/course-item.component';

import { CoursesListComponent } from './courses-list.component';

const course: CourseEntity = {
  id: faker.datatype.uuid(),
  title: faker.lorem.sentence(),
  creationDate: faker.date.recent(100),
  description: faker.lorem.paragraphs(3),
  duration: faker.datatype.number(360)
};

describe('CoursesListComponent', () => {
  let component: CoursesListComponent;
  let fixture: ComponentFixture<CoursesListComponent>;
  const router = jest.fn();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoursesListComponent, CourseItemComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [{ provide: Router, useValue: router }]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesListComponent);
    component = fixture.componentInstance;
    component.courses = [course];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call onEditAction', () => {
    const button = fixture.debugElement.query(By.css(`[automation-id="course-item-edit-button"]`));
    button.triggerEventHandler('click', null);
    expect(component).toBeTruthy();
  });

  it('should call onEditAction', () => {
    const button = fixture.debugElement.query(By.css(`[automation-id="course-item-delete-button"]`));
    button.triggerEventHandler('click', null);
    expect(component).toBeTruthy();
  });

  it('should call onAddClick', () => {
    const button = fixture.debugElement.query(By.css(`[automation-id="courses-list-load-button"]`));
    button.triggerEventHandler('click', null);
    expect(component).toBeTruthy();
  });
});
