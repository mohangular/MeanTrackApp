import { ModuleModel } from './../../models/moduleModel';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { AdminModuleAddComponent } from './admin.module.add.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../../service.service';

@Component({
  selector: 'app-admin-module',
  templateUrl: './admin.module.component.html',
  styleUrls: ['./admin.module.component.css']
})
export class AdminModuleComponent implements OnInit {

  displayedColumns = ['select', 'moduleName'];
  isSaving: boolean;
  editModuleData: ModuleModel;
  selection = new SelectionModel<ModuleModel>(true, []);
  isUpdate: boolean;
  updateId: string;
  module: any;

  constructor(public dialog: MatDialog,
              public serviceService: ServiceService) { }

  ngOnInit() {
    this.getModule();
  }

  getModule() {
    this.serviceService.getAdminModuleInfo().subscribe((res) => {
      this.module = new MatTableDataSource<ModuleModel>(res.map((row) => new ModuleModel().deserialize(row)));
    });
  }

  applyFilter(filterValue: string) {
    this.module.filter = filterValue.trim().toLowerCase();
  }
  isAllSelected() {
    return this.selection.selected.length === this.module.data.length;
  }
  masterToggle() {
    this.isAllSelected() ? this.selection.clear() : this.module.data.forEach(row => this.selection.select(row));
  }

  onNew(): void {
    this.editModuleData = new ModuleModel();
    this.isUpdate = false;
    this.openDialog();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AdminModuleAddComponent, {
      width: '400px',
      height: '230px',
      data: this.editModuleData,
      autoFocus: true,
      disableClose: true,
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.saveModule(result);
      }
    });
  }

  onEdit(row: ModuleModel): void {
    this.editModuleData = row;
    this.updateId = this.editModuleData._id;
    this.isUpdate = true;
    this.openDialog();
  }

  onDelete() {
    const selectedIds: string[] = new Array();
    this.selection.selected.forEach(item => {
      selectedIds.push(item._id);
    });

    this.isSaving = true;
    this.serviceService.deleteAdminModuleInfo(selectedIds).subscribe((res) => {
      this.module = new MatTableDataSource<ModuleModel>(res.map((row) => new ModuleModel().deserialize(row)));
      this.isSaving = false;
    });
    this.selection = new SelectionModel<ModuleModel>(true, []);
  }

  saveModule(module: ModuleModel) {
    this.isSaving = true;
    if (this.isUpdate) {
      this.serviceService.updateAdminModuleInfo(module, this.updateId).subscribe((res) => {
        this.module = new MatTableDataSource<ModuleModel>(res.map((row) => new ModuleModel().deserialize(row)));
        this.isSaving = false;
      });
    } else {
      this.serviceService.saveAdminModuleInfo(module).subscribe((res) => {
        this.module = new MatTableDataSource<ModuleModel>(res.map((row) => new ModuleModel().deserialize(row)));
        this.isSaving = false;
      });
    }
  }
}
