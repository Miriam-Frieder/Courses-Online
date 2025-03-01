import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseModel } from '../../models/course.model';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../app/store/app.state';
import { loadCourse } from '../../app/store/actions/course.actions';
import { selectCourseById } from '../../app/store/app.selectors';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-curse-detail',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    AsyncPipe
  ],
  templateUrl: './curse-detail.component.html',
  styleUrl: './curse-detail.component.css'
})
export class CurseDetailComponent {
  course$!: Observable<CourseModel | undefined>;

  constructor(private route: ActivatedRoute, private store: Store<AppState>) { }

  
  ngOnInit(): void {
    const courseId = this.route.snapshot.paramMap.get('id');
    if (courseId) {
      this.store.dispatch(loadCourse({ id: +courseId }));
      this.course$ = this.store.select(selectCourseById(+courseId));
    }
  }
  enroll(): void {
    // Logic to enroll in the course
  }

  leave(): void {
    // Logic to leave the course
  }
}



