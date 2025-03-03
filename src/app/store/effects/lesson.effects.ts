import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { LessonService } from '../../../services/lesson.service';
import { 
  loadLessons, loadLessonsSuccess, loadLessonsFailure,
  loadLesson, loadLessonSuccess, loadLessonFailure,
  createLesson, createLessonSuccess, createLessonFailure,
  updateLesson, updateLessonSuccess, updateLessonFailure,
  deleteLesson, deleteLessonSuccess, deleteLessonFailure
} from '../actions/lesson.actions';
import { LessonModel } from '../../../models/lesson.model';

@Injectable()
export class LessonEffects {
  loadLessons$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadLessons),
      mergeMap(action =>
        this.lessonService.getLessons(action.courseId).pipe(
          map(lessons => loadLessonsSuccess({ lessons })),
          catchError(error => of(loadLessonsFailure({ error })))
        )
      )
    )
  );

  loadLesson$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadLesson),
      mergeMap(action =>
        this.lessonService.getLessonById(action.courseId, action.id).pipe(
          map(lesson => loadLessonSuccess({ lesson })),
          catchError(error => of(loadLessonFailure({ error })))
        )
      )
    )
  );

  createLesson$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createLesson),
      mergeMap(action =>
        this.lessonService.createLesson(action.courseId, action.lesson).pipe(
          map((response: any) => {
            const lesson: LessonModel = {
              id: response.lessonId,
              title: action.lesson.title,
              content: action.lesson.content,
              courseId: action.courseId,
            };
            return createLessonSuccess({ lesson });
          }),
          catchError(error => of(createLessonFailure({ error })))
        )
      )
    )
  );

  updateLesson$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateLesson),
      mergeMap(action =>
        this.lessonService.updateLesson(action.courseId, action.id, action.lesson).pipe(
          map(() => updateLessonSuccess({ lesson: action.lesson })),
          catchError(error => of(updateLessonFailure({ error })))
        )
      )
    )
  );

  deleteLesson$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteLesson),
      mergeMap(action =>
        this.lessonService.deleteLesson(action.courseId, action.id).pipe(
          map(() => deleteLessonSuccess({ id: action.id })),
          catchError(error => of(deleteLessonFailure({ error })))
        )
      )
    )
  );

  

  constructor(
    private actions$: Actions,
    private lessonService: LessonService
  ) {}
}