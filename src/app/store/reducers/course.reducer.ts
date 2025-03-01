import { createReducer, on, Action } from '@ngrx/store';
import { CourseModel } from '../../../models/course.model';
import { loadCourses, loadCoursesSuccess, loadCoursesFailure, createCourse, createCourseSuccess, createCourseFailure, updateCourse, updateCourseSuccess, updateCourseFailure, deleteCourse, deleteCourseSuccess, deleteCourseFailure } from '../actions/course.actions';
import { initialState } from '../app.state';

export const initialCourseState: CourseModel[] = [];

const _courseReducer = createReducer(
  initialCourseState,
  on(loadCourses, state => ([])),
  on(loadCoursesSuccess, (state, { courses }) => [...courses]),
  on(loadCoursesFailure, (state, { error }) => ([])),

  on(createCourse, state => ([...state])),
  on(createCourseSuccess, (state, { course }) => ([...state, course])),
  on(createCourseFailure, (state, { error }) => ([...state])),

  on(updateCourse, state => ([...state])),
  on(updateCourseSuccess, (state, { course }) => (
    state.map(c => c.id === course.id ? course : c)
  )),
  on(updateCourseFailure, (state, { error }) => ([...state])),

  on(deleteCourse, state => ([...state])),
  on(deleteCourseSuccess, (state, { id }) => (
    state.filter(course => course.id !== id)
  )),
  on(deleteCourseFailure, (state, { error }) => ([...state]))
);

export function courseReducer(state: CourseModel[] | undefined, action: Action): CourseModel[] {
  return _courseReducer(state, action);
}