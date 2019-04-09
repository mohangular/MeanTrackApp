import { Activity } from './../Acttivity';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';


const ELEMENT_DATA: Activity[] = [
  {
    id: 1,
    module: 'Smart Wallet',
    Tfs_Id: '55777',
    type: 'Bug',
    buildNo: '1538.2',
    date: '01/01/2018',
    activity: 'Development',
    comments: 'Worked on initial page'
  },
  {
    id: 2,
    module: 'Organisational Meeting',
    Tfs_Id: '55777',
    type: 'Bug',
    buildNo: '1538.2',
    date: '01/01/2018',
    activity: 'Team Meeting',
    comments: 'Discussed on initial page'
  },
  {
    id: 3,
    module: 'Smart Wallet',
    Tfs_Id: '55778',
    type: 'UserStory',
    buildNo: '1538.2',
    date: '01/01/2018',
    activity: 'Development',
    comments: 'Worked on initial page'
  },
  {
    id: 4,
    module: 'Smart Wallet',
    Tfs_Id: '55777',
    type: 'Bug',
    buildNo: '1538.2',
    date: '01/01/2018',
    activity: 'Development',
    comments: 'Worked on initial page'
  },
  {
    id: 5,
    module: 'Organisational Meeting',
    Tfs_Id: '55777',
    type: 'Bug',
    buildNo: '1538.2',
    date: '01/01/2018',
    activity: 'Team Meeting',
    comments: 'Discussed on initial page'
  },
  {
    id: 6,
    module: 'Smart Wallet',
    Tfs_Id: '55778',
    type: 'UserStory',
    buildNo: '1538.2',
    date: '01/01/2018',
    activity: 'Development',
    comments: 'Worked on initial page'
  },
  {
    id: 7,
    module: 'Smart Wallet',
    Tfs_Id: '55777',
    type: 'Bug',
    buildNo: '1538.2',
    date: '01/01/2018',
    activity: 'Development',
    comments: 'Worked on initial page'
  },
  {
    id: 8,
    module: 'Organisational Meeting',
    Tfs_Id: '55777',
    type: 'Bug',
    buildNo: '1538.2',
    date: '01/01/2018',
    activity: 'Team Meeting',
    comments: 'Discussed on initial page'
  },
  {
    id: 9,
    module: 'Smart Wallet',
    Tfs_Id: '55778',
    type: 'UserStory',
    buildNo: '1538.2',
    date: '01/01/2018',
    activity: 'Development',
    comments: 'Worked on initial page'
  },
  {
    id: 10,
    module: 'Smart Wallet',
    Tfs_Id: '55777',
    type: 'Bug',
    buildNo: '1538.2',
    date: '01/01/2018',
    activity: 'Development',
    comments: 'Worked on initial page'
  },
  {
    id: 11,
    module: 'Organisational Meeting',
    Tfs_Id: '55777',
    type: 'Bug',
    buildNo: '1538.2',
    date: '01/01/2018',
    activity: 'Team Meeting',
    comments: 'Discussed on initial page'
  },
  {
    id: 12,
    module: 'Smart Wallet',
    Tfs_Id: '55778',
    type: 'UserStory',
    buildNo: '1538.2',
    date: '01/01/2018',
    activity: 'Development',
    comments: 'Worked on initial page'
  }
];

@Component({
  selector: 'app-timesheet-add',
  templateUrl: './timesheet-add.component.html',
  styleUrls: ['./timesheet-add.component.css']
})

export class TimesheetAddComponent implements OnInit {
  displayGrid = true;
  startDate = new Date(1990, 0, 1);
  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());

  displayedColumns: string[] = ['module', 'Tfs_Id', 'type', 'activity', 'comments'];
  dataSource = new MatTableDataSource<Activity>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  form = new FormGroup({
    module: new FormControl('', Validators.required),
    build: new FormControl('', Validators.required),
    tfsId: new FormControl('', Validators.required),
    workType: new FormControl('', Validators.required),
    activity: new FormControl('', Validators.required)
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

  ngOnInit() {
    // this.dataSource = new MatTableDataSource(ELEMENT_DATA);
    setTimeout(() => this.dataSource.paginator = this.paginator);
    setTimeout(() => this.dataSource.sort = this.sort);
  }

  onEdit(task: Activity) {
    this.form.patchValue({
      module: task.module,
      build: task.buildNo,
      tfsId: task.Tfs_Id,
      workType: task.type,
      activity: task.activity,
    });
  }

  onUpdate() {
    this.displayGrid = true;
  }
}
