import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModuleModel } from '../../models/moduleModel';

@Component({
    selector: 'app-admin-module-add',
    templateUrl: 'admin.module.add.component.html',
})

export class AdminModuleAddComponent {
    moduleAddForm: FormGroup = new FormGroup({
        moduleName: new FormControl('', Validators.required)
    });

    constructor(public dialogRef: MatDialogRef<AdminModuleAddComponent>,
                @Inject(MAT_DIALOG_DATA) public module: any) {
        this.moduleAddForm.patchValue(module);
    }

    closeDialog(): void {
        this.dialogRef.close();
    }

    onSave() {
        this.dialogRef.close(this.moduleAddForm.value);
    }
}
