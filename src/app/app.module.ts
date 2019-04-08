import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TimesheetAddComponent } from './timesheet-add/timesheet-add.component';
import { TimesheetEditComponent } from './timesheet-edit/timesheet-edit.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import {DataTableModule} from 'angular-4-data-table';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TimesheetAddComponent,
    TimesheetEditComponent
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
    MatInputModule
    // DataTableModule
  ],
  providers: [MatDatepickerModule, MatNativeDateModule ],
  bootstrap: [AppComponent]
})
export class AppModule { }
