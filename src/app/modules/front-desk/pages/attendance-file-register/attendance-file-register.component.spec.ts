import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendanceFileRegisterComponent } from './attendance-file-register.component';

describe('AttendanceFileRegisterComponent', () => {
  let component: AttendanceFileRegisterComponent;
  let fixture: ComponentFixture<AttendanceFileRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttendanceFileRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendanceFileRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
