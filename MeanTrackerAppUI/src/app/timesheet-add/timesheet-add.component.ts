import { TimetrackerService } from './../timetracker.service';
import { Activity } from './../Acttivity';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import * as XLSX from 'xlsx';
import { timeSheetEntry } from '../models/timeSheetEntry';


const ELEMENT_DATA: Activity[] = [
  {
    id: 1,
    module: 'Smart Wallet',
    Tfs_Id: '55777',
    type: 'Bug',
    buildNo: '1538.2',
    date: '01/01/2018',
    activity: 'Development',
    comments: 'Worked on initial page',
    hours: 2
  },
  {
    id: 2,
    module: 'Organisational Meeting',
    Tfs_Id: '55777',
    type: 'Bug',
    buildNo: '1538.2',
    date: '01/01/2018',
    activity: 'Team Meeting',
    comments: 'Discussed on initial page',
    hours: 2
  },
  {
    id: 3,
    module: 'Smart Wallet',
    Tfs_Id: '55778',
    type: 'UserStory',
    buildNo: '1538.2',
    date: '01/01/2018',
    activity: 'Development',
    comments: 'Worked on initial page',
    hours: 2
  },
  {
    id: 4,
    module: 'Smart Wallet',
    Tfs_Id: '55777',
    type: 'Bug',
    buildNo: '1538.2',
    date: '01/01/2018',
    activity: 'Development',
    comments: 'Worked on initial page',
    hours: 2
  },
  {
    id: 5,
    module: 'Organisational Meeting',
    Tfs_Id: '55777',
    type: 'Bug',
    buildNo: '1538.2',
    date: '01/01/2018',
    activity: 'Team Meeting',
    comments: 'Discussed on initial page',
    hours: 2
  },
  {
    id: 6,
    module: 'Smart Wallet',
    Tfs_Id: '55778',
    type: 'UserStory',
    buildNo: '1538.2',
    date: '01/01/2018',
    activity: 'Development',
    comments: 'Worked on initial page',
    hours: 2
  },
  {
    id: 7,
    module: 'Smart Wallet',
    Tfs_Id: '55777',
    type: 'Bug',
    buildNo: '1538.2',
    date: '01/01/2018',
    activity: 'Development',
    comments: 'Worked on initial page',
    hours: 2
  },
  {
    id: 8,
    module: 'Organisational Meeting',
    Tfs_Id: '55777',
    type: 'Bug',
    buildNo: '1538.2',
    date: '01/01/2018',
    activity: 'Team Meeting',
    comments: 'Discussed on initial page',
    hours: 2
  },
  {
    id: 9,
    module: 'Smart Wallet',
    Tfs_Id: '55778',
    type: 'UserStory',
    buildNo: '1538.2',
    date: '01/01/2018',
    activity: 'Development',
    comments: 'Worked on initial page',
    hours: 2
  },
  {
    id: 10,
    module: 'Smart Wallet',
    Tfs_Id: '55777',
    type: 'Bug',
    buildNo: '1538.2',
    date: '01/01/2018',
    activity: 'Development',
    comments: 'Worked on initial page',
    hours: 2
  },
  {
    id: 11,
    module: 'Organisational Meeting',
    Tfs_Id: '55777',
    type: 'Bug',
    buildNo: '1538.2',
    date: '01/01/2018',
    activity: 'Team Meeting',
    comments: 'Discussed on initial page',
    hours: 2
  },
  {
    id: 12,
    module: 'Smart Wallet',
    Tfs_Id: '55778',
    type: 'UserStory',
    buildNo: '1538.2',
    date: '01/01/2018',
    activity: 'Development',
    comments: 'Worked on initial page',
    hours: 2
  }
];

@Component({
  selector: 'app-timesheet-add',
  templateUrl: './timesheet-add.component.html',
  styleUrls: ['./timesheet-add.component.css']
})

export class TimesheetAddComponent implements OnInit {
  // declarations
  displayGrid = true;
  startDate = new Date(1990, 0, 1);
  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());
  moduleList: any;
  buildList: any[];
  workTypeList: any[];
  activityList: any[];
  timeTrackerValues: any[];
  showAddButton = true;
  buttonValue = 'Save';

  ExportTOExcel() 
  {
    
    this.timetrackerService.getTimeTrackerValues().subscribe((res)=>{
      this.timeTrackerValues = res;
    });
    const ws: XLSX.WorkSheet=XLSX.utils.json_to_sheet(this.timeTrackerValues);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    
    /* save to file */
    XLSX.writeFile(wb, 'SheetJS.xlsx');
    
  }

  
  // Mat Table declarations
  displayedColumns: string[] = ['module', 'Tfs_Id', 'type', 'activity', 'comments'];
  dataSource = new MatTableDataSource<Activity>(ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  form = new FormGroup({
    module: new FormControl('', Validators.required),
    build: new FormControl('', Validators.required),
    tfsId: new FormControl('', Validators.required),
    workType: new FormControl('', Validators.required),
    activity: new FormControl('', Validators.required),
    hours: new FormControl('', Validators.required),
    comments: new FormControl('', Validators.maxLength(250)),
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
    // this.dataSource = new MatTableDataSource(ELEMENT_DATA);
    setTimeout(() => this.dataSource.paginator = this.paginator);
    setTimeout(() => this.dataSource.sort = this.sort);

    this.moduleList = [
      { value: 'Smart Wallet', viewValue: 'Smart Wallet' },
      { value: 'Organisational Meeting', viewValue: 'Organisational Meeting' },
      { value: 'Team Meeting', viewValue: 'Team Meeting' }
    ];

    this.buildList = [
      { value: '1538.1', viewValue: '1538.1' },
      { value: '1538.2', viewValue: '1538.2' },
      { value: '1538.3', viewValue: '1538.3' },
      { value: '1538.4', viewValue: '1538.4' },
      { value: '1538.5', viewValue: '1538.5' }
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

  }

  onEdit(task: Activity) {
    this.form.patchValue({
      module: task.module,
      build: task.buildNo,
      tfsId: task.Tfs_Id,
      workType: task.type,
      activity: task.activity,
      hours: task.hours,
      comments: task.comments
    });
  }

  onSave() {
    this.showAddButton=true;
    this.displayGrid = true;
    this.buttonValue == 'Create'? this.onCreate():this.onUpdate();
  }

  onUpdate() {
    alert('Under Construction');
  }

  onCreate(){
    let entry = new timeSheetEntry();
    //var test = new TimeSheetEntry.deserialize(this.form.value);    
    entry = this.form.value;
    entry.date = new Date ((new Date(this.date.value).getMonth() + 1) +
               '/' + new Date(this.date.value).getDate() + 
               '/' + new Date(this.date.value).getFullYear()); 
    entry.resourceName = 'pavitha';
    entry.MID = 'M1033925';
    entry.branch = 'DEV';
    this.timetrackerService.addTimeSheetEntry(entry).subscribe(res => {
      console.log('res', res);
    });
  }
  
}
