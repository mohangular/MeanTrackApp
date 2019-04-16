import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TimesheetAddComponent } from './timesheet-add/timesheet-add.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MatFormFieldModule, MatInputModule, MatCardModule, MatIconModule, MatSelectModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotificationComponent } from './notification/notification.component';
import { ServiceService } from './service.service';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { MatPaginatorModule, MatSortModule, MatButtonModule, MatTableModule, MatTabsModule, MatCheckboxModule } from '@angular/material';
import { Routes, RouterModule } from '@angular/router';
import { ChartsModule } from 'node_modules/ng2-charts';
import { TimesheetPieChartComponent } from './dashboard/timesheet-activity-pie-chart/timesheet-activity-pie-chart.component';
import { AdminModuleComponent } from './admin/admin.module/admin.module.component';
import { AdminBuildComponent, AdminBuildAddComponent } from './admin/admin.build/admin.build.component';
import { AdminActivityComponent } from './admin/admin.activity/admin.activity.component';
import { AdminWorkitemtypeComponent } from './admin/admin.workitemtype/admin.workitemtype.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatProgressSpinnerModule, MatSnackBarModule } from '@angular/material';
import { DatePipe } from '@angular/common';
import User from './models/user';
import { AdminReportGenerateComponent } from './admin/admin-report-generate/admin-report-generate.component';
import { AdminModuleAddComponent } from './admin/admin.module/admin.module.add.component';
import { AdminWorkitemtypeAddComponent } from './admin/admin.workitemtype/admin.workitemtype.add.component';

const routes: Routes = [
  {path: 'pie-chart', component: TimesheetPieChartComponent},
  {path: '**', component: TimesheetPieChartComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TimesheetAddComponent,
    NotificationComponent,
    RegisterComponent,
    AdminComponent,
    LoginComponent,
    TimesheetPieChartComponent,
    AdminModuleComponent,
    AdminBuildComponent,
    AdminBuildAddComponent,
    AdminActivityComponent,
    AdminWorkitemtypeComponent,
    AdminReportGenerateComponent,
    AdminModuleAddComponent,
    AdminWorkitemtypeAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    HttpClientModule,
    MatCardModule,
    MatIconModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatButtonModule,
    RouterModule.forRoot(routes),
    ChartsModule,
    MatTabsModule,
    MatCheckboxModule,
    NgbModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatSelectModule
  ],
  entryComponents: [AdminBuildAddComponent, AdminModuleAddComponent, AdminWorkitemtypeAddComponent],
  providers: [MatDatepickerModule, MatNativeDateModule, ServiceService, DatePipe, User],
  bootstrap: [AppComponent]
})
export class AppModule { }
