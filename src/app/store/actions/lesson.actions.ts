import { createAction, props } from '@ngrx/store';
import { LessonModel } from '../../../models/lesson.model';

export const loadLessons = createAction('[Lesson] Load Lessons', props<{ courseId: number }>());
export const loadLessonsSuccess = createAction('[Lesson] Load Lessons Success', props<{ lessons: LessonModel[] }>());
export const loadLessonsFailure = createAction('[Lesson] Load Lessons Failure', props<{ error: any }>());

export const loadLesson = createAction('[Lesson] Load Lesson', props<{ courseId: number, id: number }>());
export const loadLessonSuccess = createAction('[Lesson] Load Lesson Success', props<{ lesson: LessonModel }>());
export const loadLessonFailure = createAction('[Lesson] Load Lesson Failure', props<{ error: any }>());

export const createLesson = createAction('[Lesson] Create Lesson', props<{ courseId: number, lesson: LessonModel }>());
export const createLessonSuccess = createAction('[Lesson] Create Lesson Success', props<{ lesson: LessonModel }>());
export const createLessonFailure = createAction('[Lesson] Create Lesson Failure', props<{ error: any }>());

export const updateLesson = createAction('[Lesson] Update Lesson', props<{ courseId: number, id: number, lesson: LessonModel }>());
export const updateLessonSuccess = createAction('[Lesson] Update Lesson Success', props<{ lesson: LessonModel }>());
export const updateLessonFailure = createAction('[Lesson] Update Lesson Failure', props<{ error: any }>());

export const deleteLesson = createAction('[Lesson] Delete Lesson', props<{ courseId: number, id: number }>());
export const deleteLessonSuccess = createAction('[Lesson] Delete Lesson Success', props<{ id: number }>());
export const deleteLessonFailure = createAction('[Lesson] Delete Lesson Failure', props<{ error: any }>());