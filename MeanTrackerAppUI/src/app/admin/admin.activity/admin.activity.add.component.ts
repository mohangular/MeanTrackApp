import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivityModel } from '../../models/activityModel';

@Component({
    selector: 'app-admin-activity-add',
    templateUrl: 'admin.activity.add.component.html',
})

export class AdminActivityAddComponent {
    activityAddForm: FormGroup = new FormGroup({
        activityName: new FormControl('', Validators.required)
    });

    constructor(public dialogRef: MatDialogRef<AdminActivityAddComponent>,
                @Inject(MAT_DIALOG_DATA) public activity: any) {
        this.activityAddForm.patchValue(activity);
    }

    closeDialog(): void {
        this.dialogRef.close();
    }

    onSave() {
        this.dialogRef.close(this.activityAddForm.value);
    }
}
