import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Admin.BuildComponent } from './admin.build.component';

describe('Admin.BuildComponent', () => {
  let component: Admin.BuildComponent;
  let fixture: ComponentFixture<Admin.BuildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Admin.BuildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Admin.BuildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
