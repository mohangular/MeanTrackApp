import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TimesheetAddComponent } from './timesheet-add/timesheet-add.component';
import { TimesheetEditComponent } from './timesheet-edit/timesheet-edit.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotificationComponent } from './notification/notification.component';
import { ServiceService } from './service.service';
import {DatePipe} from '@angular/common';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TimesheetAddComponent,
    TimesheetEditComponent,
    NotificationComponent,
    RegisterComponent
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
    HttpClientModule
  ],
  providers: [MatDatepickerModule, MatNativeDateModule , ServiceService, DatePipe ],
  bootstrap: [AppComponent]
})
export class AppModule { }
