import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaxInfo2Component } from './pax-info2.component';

describe('PaxInfo2Component', () => {
  let component: PaxInfo2Component;
  let fixture: ComponentFixture<PaxInfo2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaxInfo2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaxInfo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
