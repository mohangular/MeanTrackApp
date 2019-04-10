import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BuildModel } from '../../models/buildModel';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-admin-build',
  templateUrl: './admin.build.component.html',
  styleUrls: ['./admin.build.component.css']
})

export class AdminBuildComponent implements OnInit {

  editbuildData: BuildModel;
  buildData: any;
  displayedColumns: string[];
  isSaving: boolean;
  constructor(public dialog: MatDialog) {
    this.isSaving = false;
  }

  ngOnInit() {
    this.displayedColumns = ['buildName', 'startDate', 'endDate', 'enabled'];
    this.getBuild();
  }

  applyFilter(filterValue: string) {
    this.buildData.filter = filterValue.trim().toLowerCase();
  }

  onEdit(row: BuildModel): void {
    this.editbuildData = row;
    this.editbuildData.startDate = new Date(this.editbuildData.startDate);
    this.editbuildData.endDate = new Date(this.editbuildData.endDate);
    this.openDialog();
  }

  onNew(): void {
    this.editbuildData = new BuildModel();
    this.editbuildData.startDate = new Date();
    this.editbuildData.endDate = new Date();
    this.editbuildData.enabled = true;
    this.openDialog();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AdminBuildAddComponent, {
      width: '80%',
      maxWidth: '800px',
      data: this.editbuildData
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result) {
        console.log(result);
        this.saveBuild(result);
      }
    });
  }

  getBuild(): void {
    const data = [
      { buildName: '1284.1', startDate: 'Sat Apr 27 2019', endDate: 'Sat Apr 27 2019', enabled: true },
      { buildName: '1284.2', startDate: 'Sat Apr 27 2019', endDate: 'Sat Apr 27 2019', enabled: true },
      { buildName: '1284.3', startDate: '02/11/2018', endDate: '01/12/2018', enabled: true },
      { buildName: '1284.4', startDate: '02/12/2018', endDate: '01/01/2019', enabled: true },
      { buildName: '1284.5', startDate: '02/01/2019', endDate: '01/02/2019', enabled: false },
      { buildName: '1294.1', startDate: '01/09/2018', endDate: '01/10/2018', enabled: false },
      { buildName: '1294.2', startDate: '02/10/2018', endDate: '01/11/2018', enabled: false },
      { buildName: '1294.3', startDate: '02/11/2018', endDate: '01/12/2018', enabled: false },
      { buildName: '1294.4', startDate: '02/12/2018', endDate: '01/01/2019', enabled: false },
      { buildName: '1284.5', startDate: '02/01/2019', endDate: '01/02/2019', enabled: false },
      { buildName: '1274.1', startDate: '01/09/2018', endDate: '01/10/2018', enabled: false },
      { buildName: '1274.2', startDate: '02/10/2018', endDate: '01/11/2018', enabled: false },
      { buildName: '1274.3', startDate: '02/11/2018', endDate: '01/12/2018', enabled: false },
      { buildName: '1274.4', startDate: '02/12/2018', endDate: '01/01/2019', enabled: false },
      { buildName: '1274.5', startDate: '02/01/2019', endDate: '01/02/2019', enabled: false },
      { buildName: '1384.1', startDate: '01/09/2018', endDate: '01/10/2018', enabled: false },
      { buildName: '1384.2', startDate: '02/10/2018', endDate: '01/11/2018', enabled: false },
      { buildName: '1384.3', startDate: '02/11/2018', endDate: '01/12/2018', enabled: false },
      { buildName: '1384.4', startDate: '02/12/2018', endDate: '01/01/2019', enabled: false },
      { buildName: '1384.5', startDate: '02/01/2019', endDate: '01/02/2019', enabled: false },
      { buildName: '1394.1', startDate: '01/09/2018', endDate: '01/10/2018', enabled: false },
      { buildName: '1394.2', startDate: '02/10/2018', endDate: '01/11/2018', enabled: false },
      { buildName: '1394.3', startDate: '02/11/2018', endDate: '01/12/2018', enabled: false },
      { buildName: '1394.4', startDate: '02/12/2018', endDate: '01/01/2019', enabled: false },
      { buildName: '1384.5', startDate: '02/01/2019', endDate: '01/02/2019', enabled: false },
      { buildName: '1374.1', startDate: '01/09/2018', endDate: '01/10/2018', enabled: false },
      { buildName: '1374.2', startDate: '02/10/2018', endDate: '01/11/2018', enabled: false },
      { buildName: '1374.3', startDate: '02/11/2018', endDate: '01/12/2018', enabled: false },
      { buildName: '1374.4', startDate: '02/12/2018', endDate: '01/01/2019', enabled: false },
      { buildName: '1374.5', startDate: '02/01/2019', endDate: '01/02/2019', enabled: false },
      { buildName: '9284.1', startDate: '01/09/2018', endDate: '01/10/2016', enabled: false },
      { buildName: '9284.2', startDate: '02/10/2018', endDate: '01/11/2016', enabled: false },
      { buildName: '9284.3', startDate: '02/11/2018', endDate: '01/12/2016', enabled: false },
      { buildName: '9284.4', startDate: '02/12/2018', endDate: '01/01/2016', enabled: false },
      { buildName: '9284.5', startDate: '02/01/2019', endDate: '01/02/2016', enabled: false },
      { buildName: '9294.1', startDate: '01/09/2018', endDate: '01/10/2016', enabled: false },
      { buildName: '9294.2', startDate: '02/10/2018', endDate: '01/11/2016', enabled: false },
      { buildName: '9294.3', startDate: '02/11/2018', endDate: '01/12/2016', enabled: false },
      { buildName: '9294.4', startDate: '02/12/2018', endDate: '01/01/2016', enabled: false },
      { buildName: '9284.5', startDate: '02/01/2019', endDate: '01/02/2016', enabled: false },
      { buildName: '9274.1', startDate: '01/09/2018', endDate: '01/10/2016', enabled: false },
      { buildName: '9274.2', startDate: '02/10/2018', endDate: '01/11/2016', enabled: false },
      { buildName: '9274.3', startDate: '02/11/2018', endDate: '01/12/2016', enabled: false },
      { buildName: '9274.4', startDate: '02/12/2018', endDate: '01/01/2016', enabled: false },
      { buildName: '9274.5', startDate: '02/01/2019', endDate: '01/02/2016', enabled: false },
      { buildName: '9384.1', startDate: '01/09/2018', endDate: '01/10/2016', enabled: false },
      { buildName: '9384.2', startDate: '02/10/2018', endDate: '01/11/2016', enabled: false },
      { buildName: '9384.3', startDate: '02/11/2018', endDate: '01/12/2016', enabled: false },
      { buildName: '9384.4', startDate: '02/12/2018', endDate: '01/01/2016', enabled: false },
      { buildName: '9384.5', startDate: '02/01/2019', endDate: '01/02/2016', enabled: false },
      { buildName: '9394.1', startDate: '01/09/2018', endDate: '01/10/2016', enabled: false },
      { buildName: '9394.2', startDate: '02/10/2018', endDate: '01/11/2016', enabled: false },
      { buildName: '9394.3', startDate: '02/11/2018', endDate: '01/12/2016', enabled: false },
      { buildName: '9394.4', startDate: '02/12/2018', endDate: '01/01/2016', enabled: false },
      { buildName: '9384.5', startDate: '02/01/2019', endDate: '01/02/2016', enabled: false },
      { buildName: '9374.1', startDate: '01/09/2018', endDate: '01/10/2016', enabled: false },
      { buildName: '9374.2', startDate: '02/10/2018', endDate: '01/11/2016', enabled: false },
      { buildName: '9374.3', startDate: '02/11/2018', endDate: '01/12/2016', enabled: false },
      { buildName: '9374.4', startDate: '02/12/2018', endDate: '01/01/2016', enabled: false },
      { buildName: '9374.5', startDate: '02/01/2019', endDate: '01/02/2016', enabled: false },
      { buildName: '9684.1', startDate: '01/09/2018', endDate: '01/10/2017', enabled: false },
      { buildName: '9684.2', startDate: '02/10/2018', endDate: '01/11/2017', enabled: false },
      { buildName: '9684.3', startDate: '02/11/2018', endDate: '01/12/2017', enabled: false },
      { buildName: '9684.4', startDate: '02/12/2018', endDate: '01/01/2017', enabled: false },
      { buildName: '9684.5', startDate: '02/01/2019', endDate: '01/02/2017', enabled: false },
      { buildName: '9694.1', startDate: '01/09/2018', endDate: '01/10/2017', enabled: false },
      { buildName: '9694.2', startDate: '02/10/2018', endDate: '01/11/2017', enabled: false },
      { buildName: '9694.3', startDate: '02/11/2018', endDate: '01/12/2017', enabled: false },
      { buildName: '9694.4', startDate: '02/12/2018', endDate: '01/01/2017', enabled: false },
      { buildName: '9684.5', startDate: '02/01/2019', endDate: '01/02/2017', enabled: false },
      { buildName: '9674.1', startDate: '01/09/2018', endDate: '01/10/2017', enabled: false },
      { buildName: '9674.2', startDate: '02/10/2018', endDate: '01/11/2017', enabled: false },
      { buildName: '9674.3', startDate: '02/11/2018', endDate: '01/12/2017', enabled: false },
      { buildName: '9674.4', startDate: '02/12/2018', endDate: '01/01/2017', enabled: false },
      { buildName: '9674.5', startDate: '02/01/2019', endDate: '01/02/2017', enabled: false },
      { buildName: '9684.1', startDate: '01/09/2018', endDate: '01/10/2017', enabled: false },
      { buildName: '9684.2', startDate: '02/10/2018', endDate: '01/11/2017', enabled: false },
      { buildName: '9684.3', startDate: '02/11/2018', endDate: '01/12/2017', enabled: false },
      { buildName: '9684.4', startDate: '02/12/2018', endDate: '01/01/2017', enabled: false },
      { buildName: '9684.5', startDate: '02/01/2019', endDate: '01/02/2017', enabled: false },
      { buildName: '9694.1', startDate: '01/09/2018', endDate: '01/10/2017', enabled: false },
      { buildName: '9694.2', startDate: '02/10/2018', endDate: '01/11/2017', enabled: false },
      { buildName: '9694.3', startDate: '02/11/2018', endDate: '01/12/2017', enabled: false },
      { buildName: '9694.4', startDate: '02/12/2018', endDate: '01/01/2017', enabled: false },
      { buildName: '9684.5', startDate: '02/01/2019', endDate: '01/02/2017', enabled: false },
      { buildName: '9674.1', startDate: '01/09/2018', endDate: '01/10/2017', enabled: false },
      { buildName: '9674.2', startDate: '02/10/2018', endDate: '01/11/2017', enabled: false },
      { buildName: '9674.3', startDate: '02/11/2018', endDate: '01/12/2017', enabled: false },
      { buildName: '9674.4', startDate: '02/12/2018', endDate: '01/01/2017', enabled: false },
      { buildName: '9674.5', startDate: '02/01/2019', endDate: '01/02/2017', enabled: false },
    ];

    this.buildData = new MatTableDataSource(data.map((row) => new BuildModel().deserialize(row)));
    console.log(this.buildData);
  }
  saveBuild(build): void {
    this.isSaving = true;
  }
}

@Component({
  selector: 'app-admin-build-add',
  templateUrl: 'admin.build.component.add.html',
})

export class AdminBuildAddComponent {

  buildAddForm = new FormGroup({
    buildName: new FormControl('', Validators.required),
    startDate: new FormControl('', Validators.required),
    endDate: new FormControl('', Validators.required),
    enabled: new FormControl('', Validators.required)
  });


  constructor(
    public dialogRef: MatDialogRef<AdminBuildAddComponent>,
    @Inject(MAT_DIALOG_DATA) public builData: BuildModel
  ) {
    this.buildAddForm.patchValue(builData);
  }

  onCancel(): void {
    this.dialogRef.close(undefined);
  }

  onSave(): void {
    this.dialogRef.close(this.buildAddForm.value);
  }
}
