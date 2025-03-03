import { Component, OnInit } from '@angular/core';
import { LessonModel } from '../../models/lesson.model';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../app/store/app.state';
import { ActivatedRoute } from '@angular/router';
import { selectLessons } from '../../app/store/app.selectors';
import { loadLessons } from '../../app/store/actions/lesson.actions';
import { AsyncPipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-lesson-list',
  standalone: true,
  imports: [
    MatCardModule,
    MatListModule,
    AsyncPipe,
    MatListModule,
    MatCardModule,
    HttpClientModule,

  ],
  templateUrl: './lesson-list.component.html',
  styleUrl: './lesson-list.component.css'
})
export class LessonListComponent implements OnInit {
  lessons$: Observable<LessonModel[]>;

  constructor(private store: Store<AppState>, private route: ActivatedRoute) {
    this.lessons$ = this.store.select(selectLessons);
  }

  ngOnInit(): void {
    this.route.parent?.params.subscribe(params => {
      const courseId = +params['id']; 
      this.store.dispatch(loadLessons({ courseId }));
    });
  }
}
