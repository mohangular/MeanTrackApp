import { Component, OnInit } from '@angular/core';
import {  FormControl } from '@angular/forms';
// import { DataTableResource } from 'angular-4-data-table';

@Component({
  selector: 'app-timesheet-add',
  templateUrl: './timesheet-add.component.html',
  styleUrls: ['./timesheet-add.component.css']
})

export class TimesheetAddComponent implements OnInit {
  startDate = new Date(1990, 0, 1);
  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString())
  constructor() { }

  ngOnInit() {
  }

}
