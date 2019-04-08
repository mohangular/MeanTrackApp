import { FormControl } from '@angular/forms';
import { Activity } from './../Acttivity';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';


const ELEMENT_DATA: Activity[] = [
  {id:1, module: 'Smart Wallet', Tfs_Id: '55777',type: 'Bug', buildNo: '1538.2', date:'01/01/2018',activity:'Development', comments:'Worked on initial page'},
  {id:2, module: 'Organisational Meeting', Tfs_Id: '55777',type: 'Bug', buildNo: '1538.2', date:'01/01/2018',activity:'Team Meeting', comments:'Discussed on initial page'},
  {id:3, module: 'Smart Wallet', Tfs_Id: '55778',type: 'UserStory', buildNo: '1538.2', date:'01/01/2018',activity:'Development', comments:'Worked on initial page'},
  {id:4, module: 'Smart Wallet', Tfs_Id: '55777',type: 'Bug', buildNo: '1538.2', date:'01/01/2018',activity:'Development', comments:'Worked on initial page'},
  {id:5, module: 'Organisational Meeting', Tfs_Id: '55777',type: 'Bug', buildNo: '1538.2', date:'01/01/2018',activity:'Team Meeting', comments:'Discussed on initial page'},
  {id:6, module: 'Smart Wallet', Tfs_Id: '55778',type: 'UserStory', buildNo: '1538.2', date:'01/01/2018',activity:'Development', comments:'Worked on initial page'},
  {id:7, module: 'Smart Wallet', Tfs_Id: '55777',type: 'Bug', buildNo: '1538.2', date:'01/01/2018',activity:'Development', comments:'Worked on initial page'},
  {id:8, module: 'Organisational Meeting', Tfs_Id: '55777',type: 'Bug', buildNo: '1538.2', date:'01/01/2018',activity:'Team Meeting', comments:'Discussed on initial page'},
  {id:9, module: 'Smart Wallet', Tfs_Id: '55778',type: 'UserStory', buildNo: '1538.2', date:'01/01/2018',activity:'Development', comments:'Worked on initial page'},
  {id:10, module: 'Smart Wallet', Tfs_Id: '55777',type: 'Bug', buildNo: '1538.2', date:'01/01/2018',activity:'Development', comments:'Worked on initial page'},
  {id:11, module: 'Organisational Meeting', Tfs_Id: '55777',type: 'Bug', buildNo: '1538.2', date:'01/01/2018',activity:'Team Meeting', comments:'Discussed on initial page'},
  {id:12, module: 'Smart Wallet', Tfs_Id: '55778',type: 'UserStory', buildNo: '1538.2', date:'01/01/2018',activity:'Development', comments:'Worked on initial page'}
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
  serializedDate = new FormControl((new Date()).toISOString())
  displayedColumns: string[] = ['module', 'Tfs_Id', 'type', 'activity','comments'];
  dataSource = new MatTableDataSource<Activity>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  onEdit(rows){
console.log(rows);
  }
}
