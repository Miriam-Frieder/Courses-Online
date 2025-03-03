import { Component, OnInit } from '@angular/core';
import { CourseModel } from '../../models/course.model';
import { MatListModule } from '@angular/material/list';
import { Router, RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../app/store/app.state';
import { loadCourses } from '../../app/store/actions/course.actions';
import { selectCourses, selectLessons } from '../../app/store/app.selectors';
import { AsyncPipe } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { loadLessons } from '../../app/store/actions/lesson.actions';
import { LessonModel } from '../../models/lesson.model';
import { MatTooltipModule } from '@angular/material/tooltip';


@Component({
  selector: 'app-curses-list',
  standalone: true,
  imports: [MatListModule,
     RouterModule,
     AsyncPipe,
     MatProgressSpinnerModule,
     MatButtonModule,   
      MatIconModule,
      MatTooltipModule, 
  ],
  templateUrl: './curses-list.component.html',
  styleUrl: './curses-list.component.css'
})
export class CursesListComponent implements OnInit {
  courses$: Observable<CourseModel[]>;
  lessons$: Observable<LessonModel[]>;
  selectedCourseId: number | null = null;

  constructor(private store: Store<AppState>, private router: Router) {
    this.courses$ = this.store.select(selectCourses);
    this.lessons$ = this.store.select(selectLessons);
  }

  ngOnInit(): void {
    this.store.dispatch(loadCourses());
  }

  navigateToCourseDetail(courseId: number): void {
    this.router.navigate(['/courses', courseId]);
  }

  toggleLessons(courseId: number): void {
    if (this.selectedCourseId === courseId) {
      this.selectedCourseId = null;
    } else {
      this.selectedCourseId = courseId;
      this.store.dispatch(loadLessons({ courseId }));
    }
  }
}
