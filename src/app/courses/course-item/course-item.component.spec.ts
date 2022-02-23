import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import faker from '@faker-js/faker';
import { first } from 'rxjs';

import { CourseEntity } from '../common';
import { CourseItemComponent } from './course-item.component';

const course: CourseEntity = {
  id: faker.datatype.uuid(),
  title: faker.lorem.sentence(),
  creationDate: faker.date.recent(100),
  description: faker.lorem.paragraphs(3),
  duration: faker.datatype.number(360)
};

describe('CourseItemComponent', () => {
  let component: CourseItemComponent;
  let fixture: ComponentFixture<CourseItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CourseItemComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseItemComponent);
    component = fixture.componentInstance;
    component.course = course;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should raise delete event', () => {
    const subscribeFn = jest.fn();
    component.deleteAction.pipe(first()).subscribe(() => {
      subscribeFn();
    });
    const button = fixture.debugElement.query(By.css(`[automation-id="course-item-delete-button"]`));
    button.triggerEventHandler('click', null);
    expect(subscribeFn).toBeCalled();
  });

  it('should raise edit event', () => {
    const subscribeFn = jest.fn();
    component.editAction.pipe(first()).subscribe(() => {
      subscribeFn();
    });
    const button = fixture.debugElement.query(By.css(`[automation-id="course-item-edit-button"]`));
    button.triggerEventHandler('click', null);
    expect(subscribeFn).toBeCalled();
  });
});
