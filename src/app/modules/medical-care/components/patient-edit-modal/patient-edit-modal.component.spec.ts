import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientEditModalComponent } from './patient-edit-modal.component';

describe('PatientEditModalComponent', () => {
  let component: PatientEditModalComponent;
  let fixture: ComponentFixture<PatientEditModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientEditModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientEditModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
