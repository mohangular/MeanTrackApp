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
  
  searchByfunc(value){
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
  ExportReportToExcel() 
  {
    let moduleList = [
      { value: 'Smart Wallet', viewValue: 'Smart Wallet' },
      { value: 'Organisational Meeting', viewValue: 'Organisational Meeting' },
      { value: 'Team Meeting', viewValue: 'Team Meeting' }
    ];
    const ws: XLSX.WorkSheet=XLSX.utils.json_to_sheet(moduleList);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    
    /* save to file */
    XLSX.writeFile(wb, 'tracker.xlsx');
  }
  constructor(private service: ServiceService) { }

  ngOnInit() {
    this.searchByList = [
      { value: 'User', viewValue: 'User' },
      { value: 'Build', viewValue: 'Build' },
      { value: 'Branch', viewValue: 'Branch' }
    ];
    this.BranchList = [
      { value: 'Dev', viewValue: 'Dev' },
      { value: 'QA', viewValue: 'QA' },
      { value: 'BA', viewValue: 'BA' }
    ];
    this.UserList = [
      { value: 'M1034617', viewValue: 'Balaji Gopal' },
      { value: 'M1034624', viewValue: 'Usharani Sundarajan' }
    ];


  }

}
