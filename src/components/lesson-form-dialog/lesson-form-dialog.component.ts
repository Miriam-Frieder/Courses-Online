import { Component, Inject } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialog, MatDialogActions, MatDialogContent, MatDialogRef } from '@angular/material/dialog';
import {  MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
@Component({
  selector: 'app-lesson-form-dialog',
  standalone: true,
  imports: [ MatDialogModule, MatFormFieldModule,
      MatInputModule, ReactiveFormsModule,
      MatButton
      
  ],  
  templateUrl: './lesson-form-dialog.component.html',
  styleUrl: './lesson-form-dialog.component.css'
})
export class LessonFormDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<LessonFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { form: FormGroup, isEditMode: boolean }
  ) {}

  onCancel(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    if (this.data.form.valid) {
      this.dialogRef.close(true);
    }
  }
}
