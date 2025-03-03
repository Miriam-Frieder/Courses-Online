import { createReducer, on, Action } from '@ngrx/store';
import { LessonModel } from '../../../models/lesson.model';
import { 
  loadLessonsSuccess, createLessonSuccess, updateLessonSuccess, deleteLessonSuccess
} from '../actions/lesson.actions';

export const initialLessonState: LessonModel[] = [];

const _lessonReducer = createReducer(
  initialLessonState,
  on(loadLessonsSuccess, (state, { lessons }) => [...lessons]),
  on(createLessonSuccess, (state, { lesson }) => [...state, lesson]),
  on(updateLessonSuccess, (state, { lesson }) => state.map(l => l.id === lesson.id ? lesson : l)),
  on(deleteLessonSuccess, (state, { id }) => state.filter(lesson => lesson.id !== id))
);

export function lessonReducer(state: LessonModel[] | undefined, action: Action): LessonModel[] {
  return _lessonReducer(state, action);
}