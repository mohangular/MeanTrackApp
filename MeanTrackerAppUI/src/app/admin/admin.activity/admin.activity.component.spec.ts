import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Admin.ActivityComponent } from './admin.activity.component';

describe('Admin.ActivityComponent', () => {
  let component: Admin.ActivityComponent;
  let fixture: ComponentFixture<Admin.ActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Admin.ActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Admin.ActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
