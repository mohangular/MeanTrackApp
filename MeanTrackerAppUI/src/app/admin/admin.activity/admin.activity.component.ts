import { ActivityModel } from './../../models/activityModel';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { AdminActivityAddComponent } from './admin.activity.add.component';
import { ServiceService } from '../../service.service';

@Component({
  selector: 'app-admin-activity',
  templateUrl: './admin.activity.component.html',
  styleUrls: ['./admin.activity.component.css']
})
export class AdminActivityComponent implements OnInit {

  displayedColumns = ['select', 'activityName'];
  isSaving: boolean;
  editActivityData: ActivityModel;
  selection = new SelectionModel<ActivityModel>(true, []);
  isUpdate: boolean;
  updateId: string;
  activity: any;

  constructor(public dialog: MatDialog,
    public serviceService: ServiceService) { }

  ngOnInit() {
    this.getActivity();
  }

  getActivity() {
    this.serviceService.getAdminActivityInfo().subscribe((res) => {
      this.activity = new MatTableDataSource<ActivityModel>(res.map((row) => new ActivityModel().deserialize(row)));
    });
  }

  applyFilter(filterValue: string) {
    this.activity.filter = filterValue.trim().toLowerCase();
  }
  isAllSelected() {
    return this.selection.selected.length === this.activity.data.length;
  }
  masterToggle() {
    this.isAllSelected() ? this.selection.clear() : this.activity.data.forEach(row => this.selection.select(row));
  }

  onNew(): void {
    this.editActivityData = new ActivityModel();
    this.isUpdate = false;
    this.openDialog();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AdminActivityAddComponent, {
      width: '400px',
      height: '230px',
      data: this.editActivityData,
      autoFocus: true,
      disableClose: true,
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.saveActivity(result);
      }
    });
  }

  onEdit(row: ActivityModel): void {
    this.editActivityData = row;
    this.updateId = this.editActivityData._id;
    this.isUpdate = true;
    this.openDialog();
  }

  onDelete() {
    const selectedIds: string[] = new Array();
    this.selection.selected.forEach(item => {
      selectedIds.push(item._id);
    });

    this.isSaving = true;
    this.serviceService.deleteAdminActivityInfo(selectedIds).subscribe((res) => {
      this.activity = new MatTableDataSource<ActivityModel>(res.map((row) => new ActivityModel().deserialize(row)));
      this.isSaving = false;
    });
    this.selection = new SelectionModel<ActivityModel>(true, []);
  }

  saveActivity(activity: ActivityModel) {
    this.isSaving = true;
    if (this.isUpdate) {
      this.serviceService.updateAdminActivityInfo(activity, this.updateId).subscribe((res) => {
        this.activity = new MatTableDataSource<ActivityModel>(res.map((row) => new ActivityModel().deserialize(row)));
        this.isSaving = false;
      });
    } else {
      this.serviceService.saveAdminActivityInfo(activity).subscribe((res) => {
        this.activity = new MatTableDataSource<ActivityModel>(res.map((row) => new ActivityModel().deserialize(row)));
        this.isSaving = false;
      });
    }
  }
}
