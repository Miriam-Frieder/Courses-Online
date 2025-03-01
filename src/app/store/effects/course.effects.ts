import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { CourseService } from '../../../services/course.service';
import { 
  loadCourses, loadCoursesSuccess, loadCoursesFailure,
  loadCourse, loadCourseSuccess, loadCourseFailure,
  createCourse, createCourseSuccess, createCourseFailure,
  updateCourse, updateCourseSuccess, updateCourseFailure,
  deleteCourse, deleteCourseSuccess, deleteCourseFailure
} from '../actions/course.actions';
import { CourseModel } from '../../../models/course.model';

@Injectable()
export class CourseEffects {
  loadCourses$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadCourses),
      mergeMap(() =>
        this.courseService.getCourses().pipe(
          map(courses => loadCoursesSuccess({ courses })),
          catchError(error => of(loadCoursesFailure({ error })))
        )
      )
    )
  );

  loadCourse$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadCourse),
      mergeMap(action =>
        this.courseService.getCourseById(action.id).pipe(
          map(course => loadCourseSuccess({ course })),
          catchError(error => of(loadCourseFailure({ error })))
        )
      )
    )
  );

  createCourse$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createCourse),
      mergeMap(action =>
        this.courseService.createCourse(action.course).pipe(
          map(course => createCourseSuccess({ course })),
          catchError(error => of(createCourseFailure({ error })))
        )
      )
    )
  );

  updateCourse$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateCourse),
      mergeMap(action =>
        this.courseService.updateCourse(action.id, action.course).pipe(
          map(course => updateCourseSuccess({ course })),
          catchError(error => of(updateCourseFailure({ error })))
        )
      )
    )
  );

  deleteCourse$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteCourse),
      mergeMap(action =>
        this.courseService.deleteCourse(action.id).pipe(
          map(() => deleteCourseSuccess({ id: action.id })),
          catchError(error => of(deleteCourseFailure({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private courseService: CourseService
  ) {}
}