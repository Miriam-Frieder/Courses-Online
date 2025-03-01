import { createReducer, on } from '@ngrx/store';
import { LessonModel } from '../../../models/lesson.model';
import { loadLessonsSuccess, addLessonSuccess, updateLessonSuccess, deleteLessonSuccess } from '../actions/lesson.actions';
import { Action, ActionReducer } from '@ngrx/store';

export const initialLessonState: LessonModel[] = [];

const _lessonReducer = createReducer(
  initialLessonState,
  on(loadLessonsSuccess, (state, { lessons }) => [...lessons]),
  on(addLessonSuccess, (state, { lesson }) => [...state, lesson]),
  on(updateLessonSuccess, (state, { lesson }) => state.map(l => l.id === lesson.id ? lesson : l)),
  on(deleteLessonSuccess, (state, { id }) => state.filter(lesson => lesson.id !== id))
);

export function lessonReducer(state: LessonModel[] | undefined, action: Action): LessonModel[] {
    return _lessonReducer(state, action);
}