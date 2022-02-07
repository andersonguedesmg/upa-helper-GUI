import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendanceUnknownModalComponent } from './attendance-unknown-modal.component';

describe('AttendanceUnknownModalComponent', () => {
  let component: AttendanceUnknownModalComponent;
  let fixture: ComponentFixture<AttendanceUnknownModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttendanceUnknownModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendanceUnknownModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
