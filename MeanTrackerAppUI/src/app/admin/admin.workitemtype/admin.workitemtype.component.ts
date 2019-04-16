import { AdminWorkitemtypeAddComponent } from './admin.workitemtype.add.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { ServiceService } from '../../service.service';
import { WorkItemModel } from './../../models/workItemModel';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-admin-workitemtype',
  templateUrl: './admin.workitemtype.component.html',
  styleUrls: ['./admin.workitemtype.component.css']
})
export class AdminWorkitemtypeComponent implements OnInit {

  displayedColumns = ['select', 'workItemName'];
  isSaving: boolean;
  editWorkItemData: WorkItemModel;
  selection = new SelectionModel<WorkItemModel>(true, []);
  isUpdate: boolean;
  updateId: string;
  workItem: any;
  constructor(public dialog: MatDialog,
              public serviceService: ServiceService) { }

  ngOnInit() {
    this.getWorkItem();
  }

  getWorkItem() {
    this.serviceService.getAdminWorkItemInfo().subscribe((res) => {
      this.workItem = new MatTableDataSource<WorkItemModel>(res.map((row) => new WorkItemModel().deserialize(row)));
    });
  }

  applyFilter(filterValue: string) {
    this.workItem.filter = filterValue.trim().toLowerCase();
  }
  isAllSelected() {
    return this.selection.selected.length === this.workItem.data.length;
  }
  masterToggle() {
    this.isAllSelected() ? this.selection.clear() : this.workItem.data.forEach(row => this.selection.select(row));
  }

  onNew(): void {
    this.editWorkItemData = new WorkItemModel();
    this.isUpdate = false;
    this.openDialog();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AdminWorkitemtypeAddComponent, {
      width: '400px',
      height: '230px',
      data: this.editWorkItemData,
      autoFocus: true,
      disableClose: true,
    });
    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        this.saveWorkItem(res);
      }
    });
  }

  onEdit(row: WorkItemModel): void {
    this.editWorkItemData = row;
    this.updateId = this.editWorkItemData._id;
    this.isUpdate = true;
    this.openDialog();
  }

  onDelete() {
    const selectedIds: string[] = new Array();
    this.selection.selected.forEach(item => {
      selectedIds.push(item._id);
    });

    this.isSaving = true;
    this.serviceService.deleteAdminWorkItemInfo(selectedIds).subscribe((res) => {
      this.workItem = new MatTableDataSource<WorkItemModel>(res.map((row) => new WorkItemModel().deserialize(row)));
      this.isSaving = false;
    });
    this.selection = new SelectionModel<WorkItemModel>(true, []);
  }

  saveWorkItem(workItemMdl: WorkItemModel) {
    this.isSaving = true;
    if (this.isUpdate) {
      this.serviceService.updateAdminWorkItemInfo(workItemMdl, this.updateId).subscribe((res) => {
        this.workItem = new MatTableDataSource<WorkItemModel>(res.map((row) => new WorkItemModel().deserialize(row)));
        this.isSaving = false;
      });
    } else {
      this.serviceService.saveAdminWorkItemInfo(workItemMdl).subscribe((res) => {
        this.workItem = new MatTableDataSource<WorkItemModel>(res.map((row) => new WorkItemModel().deserialize(row)));
        this.isSaving = false;
      });
    }
  }
}
