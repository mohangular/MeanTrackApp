import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BuildModel } from '../../models/buildModel';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatTableDataSource, MatTable } from '@angular/material';
import { ServiceService } from '../../service.service';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-admin-build',
  templateUrl: './admin.build.component.html',
  styleUrls: ['./admin.build.component.css']
})

export class AdminBuildComponent implements OnInit {

  editbuildData: BuildModel;
  buildData: any;
  displayedColumns = ['select', 'buildName', 'startDate', 'endDate', 'enabled'];
  isSaving: boolean;
  selection = new SelectionModel<BuildModel>(true, []);
  isUpdate: boolean;

  constructor(public dialog: MatDialog, public serviceService: ServiceService) {
    this.isSaving = false;
  }
  @ViewChild(MatTable) buildDatatable: MatTable<BuildModel>;

  ngOnInit() {
   this.getBuild();
  }

  applyFilter(filterValue: string) {
    this.buildData.filter = filterValue.trim().toLowerCase();
  }
  isAllSelected() {
    return this.selection.selected.length === this.buildData.data.length;
  }
  masterToggle() {
    this.isAllSelected() ? this.selection.clear() : this.buildData.data.forEach(row => this.selection.select(row));
  }

  onDelete() {
    // tslint:disable-next-line:prefer-const
    let selectedIds: string[] = new Array();
    this.selection.selected.forEach(item => {
      selectedIds.push(item._id);
    });

    this.isSaving = true;
    this.serviceService.deleteAdminBuildInfo(selectedIds).subscribe((res) => {
      this.buildData = new MatTableDataSource<BuildModel>(res.map((row) => new BuildModel().deserialize(row)));
      this.isSaving = false;
    });
    this.selection = new SelectionModel<BuildModel>(true, []);
  }

  onEdit(row: BuildModel): void {
    this.editbuildData = row;
    this.editbuildData.startDate = new Date(this.editbuildData.startDate);
    this.editbuildData.endDate = new Date(this.editbuildData.endDate);
    this.isUpdate = true;
    this.openDialog();
  }

  onNew(): void {
    this.editbuildData = new BuildModel();
    this.editbuildData.startDate = new Date();
    this.editbuildData.endDate = new Date();
    this.editbuildData.enabled = true;
    this.isUpdate = false;
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
    this.serviceService.getAdminBuildInfo().subscribe((res) => {
      this.buildData = new MatTableDataSource<BuildModel>(res.map((row) => new BuildModel().deserialize(row)));
    });
  }

  saveBuild(build: BuildModel): void {
    this.isSaving = true;
    if (this.isUpdate) {
      this.serviceService.updateAdminBuildInfo(build).subscribe((res) => {
        this.buildData = new MatTableDataSource<BuildModel>(res.map((row) => new BuildModel().deserialize(row)));
        this.isSaving = false;
      });
    } else {
      this.serviceService.saveAdminBuildInfo(build).subscribe((res) => {
        this.buildData = new MatTableDataSource<BuildModel>(res.map((row) => new BuildModel().deserialize(row)));
        this.isSaving = false;
      });
    }
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
