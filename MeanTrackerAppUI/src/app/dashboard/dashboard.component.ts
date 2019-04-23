import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { TimetrackerService } from '../timetracker.service';
import { TimesheetAddComponent } from '../timesheet-add/timesheet-add.component';
import * as XLSX from 'xlsx';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  displayedColumns:string[];
  dataSource;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  timeTrackerModel: any;
  
  constructor(private timetrackerService:TimetrackerService, private timesheetAddComponent: TimesheetAddComponent) { }

  ngOnInit() {
    this.displayedColumns = ['module', 'tfsId', 'workType', 'activity', 'comments'];    
    let selectedDate = new Date(new Date(this.timesheetAddComponent.date).toLocaleDateString());
    this.timetrackerService.getTimeTrackerValues(selectedDate).subscribe((res)=>{
      this.dataSource = res;
      this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    });    
  }

  ExportToExcel() 
  {
    let selectedDate = new Date(new Date(this.timesheetAddComponent.date).toLocaleDateString());
    this.timetrackerService.getTimeTrackerValues(selectedDate).subscribe((res)=>{
      this.timeTrackerModel = res;
    });
    const ws: XLSX.WorkSheet=XLSX.utils.json_to_sheet(this.timeTrackerModel);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    
    /* save to file */
    XLSX.writeFile(wb, 'SheetJS.xlsx');
    
  }

}
