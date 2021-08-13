import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TriagesRegisterComponent } from './triages-register.component';

describe('TriagesRegisterComponent', () => {
  let component: TriagesRegisterComponent;
  let fixture: ComponentFixture<TriagesRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TriagesRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TriagesRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
