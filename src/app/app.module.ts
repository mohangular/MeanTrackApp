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
import {MatNativeDateModule, MatFormFieldModule, MatInputModule, MatCardModule, MatIconModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
<<<<<<< HEAD
import { NotificationComponent } from './notification/notification.component';
import { ServiceService } from './service.service';
import {DatePipe} from '@angular/common';
import { RegisterComponent } from './register/register.component';
=======
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { MatPaginatorModule, MatSortModule } from '@angular/material';
import { MatTableModule } from '@angular/material/table';
>>>>>>> ca4d827b528a831a7e5db6fe52719bcbca0deeb2

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TimesheetAddComponent,
    TimesheetEditComponent,
<<<<<<< HEAD
    NotificationComponent,
    RegisterComponent
=======
    AdminComponent,
    LoginComponent
>>>>>>> ca4d827b528a831a7e5db6fe52719bcbca0deeb2
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
<<<<<<< HEAD
    HttpClientModule
=======
    MatCardModule,
    MatIconModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule
>>>>>>> ca4d827b528a831a7e5db6fe52719bcbca0deeb2
  ],
  providers: [MatDatepickerModule, MatNativeDateModule , ServiceService, DatePipe ],
  bootstrap: [AppComponent]
})
export class AppModule { }
