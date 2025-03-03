import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { LessonModel } from '../../models/lesson.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../app/store/app.state';
import { selectLessons } from '../../app/store/app.selectors';
import { createLesson, deleteLesson, loadLessons, updateLesson } from '../../app/store/actions/lesson.actions';
import { MatListModule } from '@angular/material/list';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { AsyncPipe } from '@angular/common';
import { LessonFormDialogComponent } from '../lesson-form-dialog/lesson-form-dialog.component';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatTooltip } from '@angular/material/tooltip';

@Component({
  selector: 'app-lesson-management',
  standalone: true,
  imports: [MatListModule,MatIconModule,AsyncPipe,MatButtonModule,MatTooltip],
  templateUrl: './lesson-management.component.html',
  styleUrl: './lesson-management.component.css'
})
export class LessonManagementComponent {
  @Input() courseId: number | null = null;
  lessons$: Observable<LessonModel[]>;
  lessonForm: FormGroup;
  isEditMode = false;
  selectedLessonId: number | null = null;

  constructor(private store: Store<AppState>, private fb: FormBuilder, private dialog: MatDialog) {
    this.lessons$ = this.store.select(selectLessons);
    this.lessonForm = this.fb.group({
      title: ['', Validators.required],
      content: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    if (this.courseId !== null) {
      this.store.dispatch(loadLessons({ courseId: this.courseId }));
    }
  }

  addLesson(): void {
    this.isEditMode = false;
    this.selectedLessonId = null;
    this.lessonForm.reset();
    this.dialog.open(LessonFormDialogComponent, {
      data: {
        form: this.lessonForm,
        isEditMode: this.isEditMode
      }
    }).afterClosed().subscribe(result => {
      if (result && this.courseId !== null) {
        const newLesson: LessonModel = {
          id: 0, // This will be replaced by the backend
          title: this.lessonForm.value.title,
          content: this.lessonForm.value.content,
          courseId: this.courseId
        };
        this.store.dispatch(createLesson({ courseId: this.courseId, lesson: newLesson }));
      }
    });
  }

  editLesson(lesson: LessonModel): void {
    this.isEditMode = true;
    this.selectedLessonId = lesson.id;
    this.lessonForm.patchValue({
      title: lesson.title,
      content: lesson.content
    });
    this.dialog.open(LessonFormDialogComponent, {
      data: {
        form: this.lessonForm,
        isEditMode: this.isEditMode
      }
    }).afterClosed().subscribe(result => {
      if (result && this.courseId !== null) {
        const updatedLesson: LessonModel = {
          ...lesson,
          title: this.lessonForm.value.title,
          content: this.lessonForm.value.content
        };
        this.store.dispatch(updateLesson({ courseId: this.courseId, id: lesson.id, lesson: updatedLesson }));
      }
    });
  }

  deleteLesson(lessonId: number): void {
    if (this.courseId !== null) {
      this.store.dispatch(deleteLesson({ courseId: this.courseId, id: lessonId }));
    }
  }
}
