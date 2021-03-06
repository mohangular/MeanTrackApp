import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import {TimesheetAddComponent } from './timesheet-add/timesheet-add.component';
import { RegisterComponent } from './register/register.component';
import { NotificationComponent } from './notification/notification.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path:'',
    redirectTo:'/login',
    pathMatch:'full'
  },
  {
    path: 'timesheet',
    component: TimesheetAddComponent
  },
  {
    path: 'notification',
    component: NotificationComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'timesheet/admin',
    component: AdminComponent
  },
];

@NgModule({
  imports:  [RouterModule.forRoot(routes), RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }