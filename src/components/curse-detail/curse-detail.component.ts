import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseModel } from '../../models/course.model';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../app/store/app.state';
import { enrollStudent, loadCourse, unenrollStudent } from '../../app/store/actions/course.actions';
import { selectAuthUser, selectCourseById } from '../../app/store/app.selectors';
import { AsyncPipe } from '@angular/common';
import { UserModel } from '../../models/user.model';

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
  authUser$: Observable<UserModel | null>;

  constructor(private route: ActivatedRoute, private store: Store<AppState>) {
    this.authUser$ = this.store.select(selectAuthUser);
  }

  ngOnInit(): void {
    const courseId = this.route.snapshot.paramMap.get('id');
    if (courseId) {
      this.store.dispatch(loadCourse({ id: +courseId }));
      this.course$ = this.store.select(selectCourseById(+courseId));
      this.authUser$ = this.store.select(selectAuthUser);
    }
  }

  enroll(): void {
    console.log('enroll');
    this.authUser$.subscribe(authUser => {
      console.log(authUser);
      if (authUser) {
        const courseId = this.route.snapshot.paramMap.get('id');
        console.log(courseId);
        if (courseId) {
          this.store.dispatch(enrollStudent({ courseId: +courseId, userId: authUser.id }));
        }
      }
    })
  }


  leave(): void {
    console.log('leave');
    const courseId = this.route.snapshot.paramMap.get('id');
    console.log(courseId);
    if (courseId) {
      this.authUser$.subscribe(authUser => {
        console.log(authUser);
        if (authUser) {
          
          this.store.dispatch(unenrollStudent({ courseId: +courseId, userId: authUser.id }));
        }
      });
    }
  }

}




