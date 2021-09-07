import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentRegisterComponent } from './appointment-register.component';

describe('AppointmentRegisterComponent', () => {
  let component: AppointmentRegisterComponent;
  let fixture: ComponentFixture<AppointmentRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppointmentRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
