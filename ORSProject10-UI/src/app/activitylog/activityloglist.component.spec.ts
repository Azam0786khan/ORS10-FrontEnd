import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityloglistComponent } from './activityloglist.component';

describe('ActivityloglistComponent', () => {
  let component: ActivityloglistComponent;
  let fixture: ComponentFixture<ActivityloglistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityloglistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityloglistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
