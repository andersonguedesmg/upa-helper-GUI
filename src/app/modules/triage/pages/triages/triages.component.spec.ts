import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TriagesComponent } from './triages.component';

describe('TriagesComponent', () => {
  let component: TriagesComponent;
  let fixture: ComponentFixture<TriagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TriagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TriagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
