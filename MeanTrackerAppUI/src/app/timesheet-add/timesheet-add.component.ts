import { Activity } from './../Acttivity';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';


const ELEMENT_DATA: Activity[] = [
  {id:1, module: 'Smart Wallet', Tfs_Id: '55777',type: 'Bug', buildNo: '1538.2', date:'01/01/2018',activity:'Development', comments:'Worked on initial page', hours: 1.5},
  {id:2, module: 'Organisational Meeting', Tfs_Id: '55777',type: 'Bug', buildNo: '1538.2', date:'01/01/2018',activity:'Team Meeting', comments:'Discussed on initial page', hours: 1.5},
  {id:3, module: 'Smart Wallet', Tfs_Id: '55778',type: 'UserStory', buildNo: '1538.2', date:'01/01/2018',activity:'Development', comments:'Worked on initial page', hours: 1.5},
  {id:4, module: 'Smart Wallet', Tfs_Id: '55777',type: 'Bug', buildNo: '1538.2', date:'01/01/2018',activity:'Development', comments:'Worked on initial page', hours: 1.5},
  {id:5, module: 'Organisational Meeting', Tfs_Id: '55777',type: 'Bug', buildNo: '1538.2', date:'01/01/2018',activity:'Team Meeting', comments:'Discussed on initial page', hours: 4.5},
  {id:6, module: 'Smart Wallet', Tfs_Id: '55778',type: 'UserStory', buildNo: '1538.2', date:'01/01/2018',activity:'Development', comments:'Worked on initial page', hours: 2.5},
  {id:7, module: 'Smart Wallet', Tfs_Id: '55777',type: 'Bug', buildNo: '1538.2', date:'01/01/2018',activity:'Development', comments:'Worked on initial page', hours: 8.5},
  {id:8, module: 'Organisational Meeting', Tfs_Id: '55777',type: 'Bug', buildNo: '1538.2', date:'01/01/2018',activity:'Team Meeting', comments:'Discussed on initial page', hours: 1.5},
  {id:9, module: 'Smart Wallet', Tfs_Id: '55778',type: 'UserStory', buildNo: '1538.2', date:'01/01/2018',activity:'Development', comments:'Worked on initial page', hours: 5.5},
  {id:10, module: 'Smart Wallet', Tfs_Id: '55777',type: 'Bug', buildNo: '1538.2', date:'01/01/2018',activity:'Development', comments:'Worked on initial page', hours: 5.5},
  {id:11, module: 'Organisational Meeting', Tfs_Id: '55777',type: 'Bug', buildNo: '1538.2', date:'01/01/2018',activity:'Team Meeting', comments:'Discussed on initial page', hours: 8.5},
  {id:12, module: 'Smart Wallet', Tfs_Id: '55778',type: 'UserStory', buildNo: '1538.2', date:'01/01/2018',activity:'Development', comments:'Worked on initial page', hours: 7.75}
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
  selectedRow: Activity;
 
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

 form = new FormGroup({
   module: new FormControl('',Validators.required),
   build : new FormControl('',Validators.required),
   tfsId :  new FormControl('',Validators.required),
   workType : new FormControl('',Validators.required),
   activity : new FormControl('',Validators.required),
   hours: new FormControl('',Validators.required),
   comments: new FormControl('',Validators.maxLength(250)),
 })

 get module(){
   return this.form.get('module');
 }

 get build(){
  return this.form.get('build');
}

get tfsId(){
  return this.form.get('tfsId');
}

get workType(){
  return this.form.get('workType');
}

get activity(){
  return this.form.get('activity');
}

get hours(){
  return this.form.get('hours');
}

get comments(){
  return this.form.get('comments');
}

  ngOnInit() {
   // this.dataSource = new MatTableDataSource(ELEMENT_DATA);
    setTimeout(() => this.dataSource.paginator = this.paginator);
    setTimeout(() => this.dataSource.sort = this.sort);
  }
 
  onEdit(rows){
console.log(rows);
this.selectedRow = rows;
this.form.patchValue({
  'module':this.selectedRow.module,
  'build':this.selectedRow.buildNo,
  'tfsId':this.selectedRow.Tfs_Id,
  'workType':this.selectedRow.type,
  'activity':this.selectedRow.activity,
  'hours':this.selectedRow.hours,
  'comments':this.selectedRow.comments
});

// // sets the default value for embedded elements in the form model 
// // Invoicing address
// (<FormGroup>this.form.controls['adresseFacturation']).controls['id'].patchValue(this.selectedClient.adresseFacturation.id);
// (<FormGroup>this.form.controls['adresseFacturation']).controls['rue'].patchValue(this.selectedClient.adresseFacturation.rue);
// (<FormGroup>this.form.controls['adresseFacturation']).controls['complement'].patchValue(this.selectedClient.adresseFacturation.complement);

  }

  onUpdate(form){
    this.displayGrid = true;
    console.log(form);
  }
}
