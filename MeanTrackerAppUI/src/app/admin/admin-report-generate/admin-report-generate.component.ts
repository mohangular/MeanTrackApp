import { TimetrackerService } from './../../timetracker.service';
import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../../service.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-admin-report-generate',
  templateUrl: './admin-report-generate.component.html',
  styleUrls: ['./admin-report-generate.component.css']
})
export class AdminReportGenerateComponent implements OnInit {
  searchByList: any;
  UserList: any;
  BranchList: any;
  BuildList: any;
  exportDetails: any;
  
  searchByfunc(value){
    console.log('selec',value);
    switch (value) {
       case "User": {
        this.service.getUserList().subscribe((res)=>{
          this.UserList = res;
          console.log(res);
        });
          break;
       }
       case "Branch": {
          this.BranchList;
          break;
       }
       case "Build": {
        this.service.getAdminBuildInfo().subscribe((res)=>{
          this.BuildList = res;
          console.log(res);
        });
          console.log("Build");
          break;
       }
    }
  }
  ExportReportToExcel(value,searchBy) 
  {
    
    this.timeTracker.getlTimeTrackerByCriteria(value,searchBy).subscribe((res) =>{
      this.exportDetails = res;
      console.log('expo',res); 
      const ws: XLSX.WorkSheet=XLSX.utils.json_to_sheet(this.exportDetails);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');    
    /* save to file */
    XLSX.writeFile(wb, 'tracker.xlsx'); 
    });
    console.log('expo out',this.exportDetails);
      
  }
  constructor(private service: ServiceService, private timeTracker: TimetrackerService) { }

  ngOnInit() {
    this.searchByList = [
      { value: 'User', viewValue: 'User' },
      { value: 'Build', viewValue: 'Build' },
      { value: 'Branch', viewValue: 'Branch' }
    ];
    this.BranchList = [
      { value: 'DEV', viewValue: 'DEV' },
      { value: 'QA', viewValue: 'QA' },
      { value: 'BA', viewValue: 'BA' }
    ];    


  }

}
