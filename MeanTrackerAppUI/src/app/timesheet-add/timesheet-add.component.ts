import { timeSheetEntry } from './../models/timeSheetEntry';
import { TimetrackerService } from './../timetracker.service';
import { Activity } from './../Acttivity';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatSort,  } from '@angular/material';
import * as XLSX from 'xlsx';


@Component({
  selector: 'app-timesheet-add',
  templateUrl: './timesheet-add.component.html',
  styleUrls: ['./timesheet-add.component.css']
})

export class TimesheetAddComponent implements OnInit {
  // declarations
  displayGrid = true;
  startDate = new Date();
  date = new Date();
  maxDate = new Date();
  serializedDate = new FormControl((new Date()).toISOString());
  moduleList: any;
  buildList: any[];
  workTypeList: any[];
  activityList: any[];
  timeTrackerModel:any;
  showAddButton = true;
  buttonValue = 'Save';
  currentTaskId:string;

  // ExportToExcel() 
  // {
  //   this.timetrackerService.getTimeTrackerValues().subscribe((res)=>{
  //     this.timeTrackerModel = res;
  //   });
  //   const ws: XLSX.WorkSheet=XLSX.utils.json_to_sheet(this.timeTrackerModel);
  //   const wb: XLSX.WorkBook = XLSX.utils.book_new();
  //   XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    
  //   /* save to file */
  //   XLSX.writeFile(wb, 'SheetJS.xlsx');
    
  // }

  
  // Mat Table declarations
  displayedColumns: string[];
  dataSource;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  form = new FormGroup({
    module: new FormControl('', Validators.required),
    build: new FormControl('', Validators.required),
    tfsId: new FormControl('', Validators.required),
    workType: new FormControl('', Validators.required),
    activity: new FormControl('', Validators.required),
    hours: new FormControl('', Validators.required),
    comments: new FormControl('', [ Validators.required, Validators.maxLength(250)]),
  });
 
  
  get module() {
    return this.form.get('module');
  }

  get build() {
    return this.form.get('build');
  }

  get tfsId() {
    return this.form.get('tfsId');
  }

  get workType() {
    return this.form.get('workType');
  }

  get activity() {
    return this.form.get('activity');
  }

  get hours() {
    return this.form.get('hours');
  }

  get comments() {
    return this.form.get('comments');
  }
  constructor(private timetrackerService: TimetrackerService){
    
  }
  ngOnInit() {
    this.moduleList = [
      { value: 'Smart Wallet', viewValue: 'Smart Wallet' },
      { value: 'Organisational Meeting', viewValue: 'Organisational Meeting' },
      { value: 'Team Meeting', viewValue: 'Team Meeting' }
    ];

    this.buildList = [
      { value: 1538.1, viewValue: 1538.1 },
      { value: 1538.2, viewValue: 1538.2 },
      { value: 1538.3, viewValue: 1538.3 },
      { value: 1538.4, viewValue: 1538.4 },
      { value: 1538.5, viewValue: 1538.5 }
    ];

    this.workTypeList = [
      { value: 'Bug', viewValue: 'Bug' },
      { value: 'UserStory', viewValue: 'UserStory' },
      { value: 'Others', viewValue: 'Others' }
    ];

    this.activityList = [

      { value: 'Dev-Coding', viewValue: 'Coding' },
      { value: 'Dev-Analysis', viewValue: 'Analysis' },
      { value: 'Dev-UnitTesting', viewValue: 'UnitTesting' },
      { value: 'Dev-CodeRework', viewValue: 'CodeRework' },
      { value: 'Others', viewValue: 'Others' }
    ];    

  this.getTimeTrackerModel();

    this.displayedColumns = ['module', 'tfsId', 'workType', 'activity', 'comments'];
    setTimeout(() => this.dataSource.paginator = this.paginator);
    setTimeout(() => this.dataSource.sort = this.sort);

   //this.getOnLoadTimeTrackerValues();
  }

  getTimeTrackerModel(){
    this.getTimeTrackerDetails();
  }

  nextDate(){
    if((this.date) < (this.maxDate)){
      this.date.setDate(this.date.getDate() + 1); 
      this.date = new Date(this.date);
    }
        
  }

  prevDate(){
   
    this.date.setDate(this.date.getDate() -1); 
    this.date = new Date(this.date);

  }

  onDateChange(){
    this.getTimeTrackerDetails();
   }
  // getOnLoadTimeTrackerValues(){
  //   this.timetrackerService.getOnLoad().subscribe((res) => {
  //     this.timeTrackerModel = res
  //   });
  // }

  onEdit(task: Activity) {
    this.currentTaskId = task._id;
    this.form.patchValue({
      module: task.module,
      build: task.build,
      tfsId: task.tfsId,
      workType: task.workType,
      activity: task.activity,
      hours: task.hours,
      comments: task.comments
    });
  }

  onSave() {
    this.showAddButton=true;
    this.displayGrid = true;
    this.buttonValue == 'Create'? this.onCreate():this.onUpdate();
    this.form.reset();
  }

  onUpdate() {
    let entry = new timeSheetEntry();  
    entry = this.form.value;
    entry.date = new Date ((new Date(this.date).getMonth() + 1) +
               '/' + new Date(this.date).getDate() + 
               '/' + new Date(this.date).getFullYear()); 
    entry.resourceName = 'pavitha';
    entry.MID = 'M1033925';
    entry.branch = 'DEV';
    entry._id = this.currentTaskId;
    this.timetrackerService.updateTimeSheetEntry(entry).subscribe((res)=>{
      console.log('Updated Successfully');
    this.getTimeTrackerModel();
    })
  }

  onCreate(){
    let entry = new timeSheetEntry();
    entry = this.form.value;
    entry.date = new Date ((new Date(this.date).getMonth() + 1) +
               '/' + new Date(this.date).getDate() + 
               '/' + new Date(this.date).getFullYear()); 
    entry.resourceName = 'pavitha';
    entry.MID = 'M1033925';
    entry.branch = 'DEV';
    this.timetrackerService.addTimeSheetEntry(entry).subscribe(res => {
      console.log('Saved Sucessfully');
    this.getTimeTrackerModel();
    });
  }

  deleteEntry(){
    this.timetrackerService.deleteTimeSheetEntry(this.currentTaskId).subscribe((res)=>{
      console.log('Deleted Successfully');
      this.getTimeTrackerModel();
      this.displayGrid = true;
      this.showAddButton = true;
      this.form.reset();
    })
  }

  getTimeTrackerDetails(){
    let selectedDate = new Date(new Date(this.date).toLocaleDateString());
    this.timetrackerService.getTimeTrackerValues(selectedDate).subscribe((res)=>{     
      this.dataSource = res;
      console.log(this.dataSource);
    });
  }
}
