import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { TimetrackerService } from '../timetracker.service';
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
  
  constructor(private timetrackerService:TimetrackerService) { }

  ngOnInit() {
    this.displayedColumns = ['module', 'tfsId', 'workType', 'activity', 'comments'];
    setTimeout(() => this.dataSource.paginator = this.paginator);
    setTimeout(() => this.dataSource.sort = this.sort);
    this.timetrackerService.getTimeTrackerValues().subscribe((res)=>{
      this.dataSource = res;
    });
  }

  ExportToExcel() 
  {
    this.timetrackerService.getTimeTrackerValues().subscribe((res)=>{
      this.timeTrackerModel = res;
    });
    const ws: XLSX.WorkSheet=XLSX.utils.json_to_sheet(this.timeTrackerModel);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    
    /* save to file */
    XLSX.writeFile(wb, 'SheetJS.xlsx');
    
  }

}
