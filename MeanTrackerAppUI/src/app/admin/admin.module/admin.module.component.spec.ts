import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Admin.ModuleComponent } from './admin.module.component';

describe('Admin.ModuleComponent', () => {
  let component: Admin.ModuleComponent;
  let fixture: ComponentFixture<Admin.ModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Admin.ModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Admin.ModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
