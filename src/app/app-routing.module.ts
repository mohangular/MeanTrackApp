import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent } from './dashboard/dashboard.component';
import {TimesheetAddComponent } from './timesheet-add/timesheet-add.component';
import { TimesheetEditComponent } from './timesheet-edit/timesheet-edit.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: DashboardComponent
  // },
  {
    path:'',
    component: LoginComponent
  },
  {
    path: 'timesheet/create',
    component: TimesheetAddComponent
  },
  {
    path: 'timesheet/edit/:id',
    component: TimesheetEditComponent
  },
  {
    path: 'timesheet/admin',
    component: AdminComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }