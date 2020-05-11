import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyRouteComponentComponent } from './modify-route-component.component';

describe('ModifyRouteComponentComponent', () => {
  let component: ModifyRouteComponentComponent;
  let fixture: ComponentFixture<ModifyRouteComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyRouteComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyRouteComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
