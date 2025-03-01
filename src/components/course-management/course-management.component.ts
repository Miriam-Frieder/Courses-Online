import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CourseModel } from '../../models/course.model';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { Router, RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../app/store/app.state';
import { loadCourses, createCourse, updateCourse, deleteCourse } from '../../app/store/actions/course.actions';
import { AsyncPipe } from '@angular/common';
import {  ReactiveFormsModule } from '@angular/forms';
import { selectCourses } from '../../app/store/app.selectors';
import { CourseFormDialogComponent } from '../course-form-dialog/course-form-dialog.component';


@Component({
  selector: 'app-course-management',
  standalone: true,
  imports: [MatListModule, MatProgressSpinnerModule, MatButtonModule, MatIconModule, RouterModule, AsyncPipe, ReactiveFormsModule],
  templateUrl: './course-management.component.html',
  styleUrls: ['./course-management.component.css']
})
export class CourseManagementComponent implements OnInit {
  courses$: Observable<CourseModel[]>;
  courseForm: FormGroup;
  isEditMode = false;
  selectedCourseId: number | null = null;

  constructor(private store: Store<AppState>, private router: Router, private fb: FormBuilder, private dialog: MatDialog) {
    this.courses$ = this.store.select(selectCourses);
    this.courseForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      teacherId: [1, Validators.required] 
    });
  }

  ngOnInit(): void {
    this.store.dispatch(loadCourses());
  }

  navigateToCourseDetail(courseId: number): void {
    this.router.navigate(['/courses', courseId]);
  }

  deleteCourse(courseId: number): void {
    this.store.dispatch(deleteCourse({ id: courseId }));
  }

  addCourse(): void {
    this.isEditMode = false;
    this.selectedCourseId = null;
    this.courseForm.reset();
    this.dialog.open(CourseFormDialogComponent, {
      data: {
        form: this.courseForm,
        isEditMode: this.isEditMode
      }
    }).afterClosed().subscribe(result => {
      if (result) {
        const newCourse: CourseModel = {
          id: 0, // This will be replaced by the backend
          title: this.courseForm.value.title,
          description: this.courseForm.value.description,
          teacherId: this.courseForm.value.teacherId
        };
        this.store.dispatch(createCourse({ course: newCourse }));
      }
    });
  }

  editCourse(course: CourseModel): void {
    this.isEditMode = true;
    this.selectedCourseId = course.id;
    this.courseForm.patchValue({
      title: course.title,
      description: course.description
    });
    this.dialog.open(CourseFormDialogComponent, {
      data: {
        form: this.courseForm,
        isEditMode: this.isEditMode
      }
    }).afterClosed().subscribe(result => {
      if (result) {
        const updatedCourse: CourseModel = {
          ...course,
          title: this.courseForm.value.title,
          description: this.courseForm.value.description
        };
        this.store.dispatch(updateCourse({ id: course.id, course: updatedCourse }));
      }
    });
  }
}