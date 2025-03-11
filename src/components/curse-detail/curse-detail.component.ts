import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseModel } from '../../models/course.model';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Observable, combineLatest } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../app/store/app.state';
import { enrollStudent, loadCourse, unenrollStudent } from '../../app/store/actions/course.actions';
import { selectAuthUser, selectCourseById } from '../../app/store/app.selectors';
import { AsyncPipe } from '@angular/common';
import { UserModel } from '../../models/user.model';
import { CourseService } from '../../services/course.service';
import { map, switchMap } from 'rxjs/operators';

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
export class CurseDetailComponent implements OnInit {
  course$!: Observable<CourseModel | undefined>;
  authUser$: Observable<UserModel | null>;
  isEnrolled$!: Observable<boolean>;

  constructor(private route: ActivatedRoute, private store: Store<AppState>, private courseService: CourseService) {
    this.authUser$ = this.store.select(selectAuthUser);
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const courseId = params.get('id');
      if (courseId) {
        this.store.dispatch(loadCourse({ id: +courseId }));
        this.course$ = this.store.select(selectCourseById(+courseId));
        this.authUser$ = this.store.select(selectAuthUser);

        this.isEnrolled$ = this.authUser$.pipe(
          switchMap(authUser => 
            this.courseService.getCoursesByStudentId(authUser?.id || 0).pipe(
              map(courses => courses.some(course => course.id === +courseId))
            )
          )
        );
      }
    });
  }

  enroll(): void {
    this.authUser$.subscribe(authUser => {
      if (authUser) {
        const courseId = this.route.snapshot.paramMap.get('id');
        if (courseId) {
          this.store.dispatch(enrollStudent({ courseId: +courseId, userId: authUser.id }));
          this.updateEnrollmentStatus(authUser.id, +courseId);
        }
      }
    });
  }

  leave(): void {
    const courseId = this.route.snapshot.paramMap.get('id');
    if (courseId) {
      this.authUser$.subscribe(authUser => {
        if (authUser) {
          this.store.dispatch(unenrollStudent({ courseId: +courseId, userId: authUser.id }));
          this.updateEnrollmentStatus(authUser.id, +courseId);
        }
      });
    }
  }

  private updateEnrollmentStatus(userId: number, courseId: number): void {
    this.isEnrolled$ = this.courseService.getCoursesByStudentId(userId).pipe(
      map(courses => courses.some(course => course.id === courseId))
    );
  }
}