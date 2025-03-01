import { createAction, props } from '@ngrx/store';
import { LessonModel } from '../../../models/lesson.model';

export const loadLessons = createAction('[Lesson] Load Lessons', props<{ courseId: number }>());
export const loadLessonsSuccess = createAction('[Lesson] Load Lessons Success', props<{ lessons: LessonModel[] }>());
export const loadLessonsFailure = createAction('[Lesson] Load Lessons Failure', props<{ error: any }>());

export const addLesson = createAction('[Lesson] Add Lesson', props<{ lesson: LessonModel }>());
export const addLessonSuccess = createAction('[Lesson] Add Lesson Success', props<{ lesson: LessonModel }>());
export const addLessonFailure = createAction('[Lesson] Add Lesson Failure', props<{ error: any }>());

export const updateLesson = createAction('[Lesson] Update Lesson', props<{ lesson: LessonModel }>());
export const updateLessonSuccess = createAction('[Lesson] Update Lesson Success', props<{ lesson: LessonModel }>());
export const updateLessonFailure = createAction('[Lesson] Update Lesson Failure', props<{ error: any }>());

export const deleteLesson = createAction('[Lesson] Delete Lesson', props<{ id: number }>());
export const deleteLessonSuccess = createAction('[Lesson] Delete Lesson Success', props<{ id: number }>());
export const deleteLessonFailure = createAction('[Lesson] Delete Lesson Failure', props<{ error: any }>());