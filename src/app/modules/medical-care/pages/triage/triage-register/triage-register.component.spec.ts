import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TriageRegisterComponent } from './triage-register.component';

describe('TriageRegisterComponent', () => {
  let component: TriageRegisterComponent;
  let fixture: ComponentFixture<TriageRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TriageRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TriageRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
