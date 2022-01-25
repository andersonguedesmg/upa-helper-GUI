import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmDialogSessionExpiredComponent } from './confirm-dialog-session-expired.component';

describe('ConfirmDialogSessionExpiredComponent', () => {
  let component: ConfirmDialogSessionExpiredComponent;
  let fixture: ComponentFixture<ConfirmDialogSessionExpiredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmDialogSessionExpiredComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmDialogSessionExpiredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
