import { Component, Inject, InjectionToken } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-course-form-dialog',
  standalone: true,
  imports: [ MatDialogModule, MatFormFieldModule,
      MatInputModule, ReactiveFormsModule,
      
  ],
  templateUrl: './course-form-dialog.component.html',
  styleUrl: './course-form-dialog.component.css'
})
export class CourseFormDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<CourseFormDialogComponent>,
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


