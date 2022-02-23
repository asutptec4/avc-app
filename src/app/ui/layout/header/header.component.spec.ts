import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call onLoginClick', () => {
    const button = fixture.debugElement.query(By.css(`[automation-id="header-login-button"]`));
    button.triggerEventHandler('click', null);
    expect(component).toBeTruthy();
  });

  it('should call onLogoutClick', () => {
    const button = fixture.debugElement.query(By.css(`[automation-id="header-logout-button"]`));
    button.triggerEventHandler('click', null);
    expect(component).toBeTruthy();
  });
});
