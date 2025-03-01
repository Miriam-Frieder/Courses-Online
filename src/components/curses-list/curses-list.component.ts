import { Component, OnInit } from '@angular/core';
import { CourseModel } from '../../models/course.model';
import { MatListModule } from '@angular/material/list';
import { Router, RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../app/store/app.state';
import { loadCourses } from '../../app/store/actions/course.actions';
import { selectCourses } from '../../app/store/app.selectors';
import { AsyncPipe } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-curses-list',
  standalone: true,
  imports: [MatListModule, RouterModule,AsyncPipe,MatProgressSpinnerModule,MatButtonModule,
  
  ],
  templateUrl: './curses-list.component.html',
  styleUrl: './curses-list.component.css'
})
export class CursesListComponent implements OnInit {
  courses$: Observable<CourseModel[]>;

  constructor(private store: Store<AppState>, private router: Router) {
    this.courses$ = this.store.select(selectCourses);
    this.courses$.forEach(courses => console.log(courses));
  }

  ngOnInit(): void {
    this.store.dispatch(loadCourses());
    this.courses$ = this.store.select(selectCourses);
  }

  navigateToCourseDetail(courseId: number): void {
    this.router.navigate(['/courses', courseId]);
  }
}
