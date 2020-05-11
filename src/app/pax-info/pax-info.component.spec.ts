import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaxInfoComponent } from './pax-info.component';

describe('PaxInfoComponent', () => {
  let component: PaxInfoComponent;
  let fixture: ComponentFixture<PaxInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaxInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaxInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
