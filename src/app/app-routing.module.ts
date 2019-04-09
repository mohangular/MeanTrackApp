import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import {TimesheetAddComponent } from './timesheet-add/timesheet-add.component';
import { TimesheetEditComponent } from './timesheet-edit/timesheet-edit.component';
import { RegisterComponent } from './register/register.component';
import { NotificationComponent } from './notification/notification.component';

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
<<<<<<< HEAD
    path: 'notification',
    component: NotificationComponent
  },
  {
    path: 'register',
    component: RegisterComponent
=======
    path: 'timesheet/admin',
    component: AdminComponent
>>>>>>> ca4d827b528a831a7e5db6fe52719bcbca0deeb2
  },
];

@NgModule({
  imports:  [RouterModule.forRoot(routes), RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }