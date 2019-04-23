import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-admin-workitemtype-add',
    templateUrl: 'admin.workitemtype.add.component.html'
})

export class AdminWorkitemtypeAddComponent {
    WorkItemAddForm: FormGroup = new FormGroup({
        workItemName: new FormControl('', Validators.required)
    });

    constructor(public dialogRef: MatDialogRef<AdminWorkitemtypeAddComponent>,
                @Inject(MAT_DIALOG_DATA) public workItem: any) {
        this.WorkItemAddForm.patchValue(workItem);
    }

    closeDialog(): void {
        this.dialogRef.close();
    }

    onSave() {
        console.log("add"+this.WorkItemAddForm.value);
        this.dialogRef.close(this.WorkItemAddForm.value);
    }
}
