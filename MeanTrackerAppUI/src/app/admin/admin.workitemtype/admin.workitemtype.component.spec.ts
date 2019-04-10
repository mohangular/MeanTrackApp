import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Admin.WorkitemtypeComponent } from './admin.workitemtype.component';

describe('Admin.WorkitemtypeComponent', () => {
  let component: Admin.WorkitemtypeComponent;
  let fixture: ComponentFixture<Admin.WorkitemtypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Admin.WorkitemtypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Admin.WorkitemtypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
