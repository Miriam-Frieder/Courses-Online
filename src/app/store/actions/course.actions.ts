import { createAction, props } from '@ngrx/store';
import { CourseModel } from '../../../models/course.model';

export const loadCourses = createAction('[Course] Load Courses');
export const loadCoursesSuccess = createAction('[Course] Load Courses Success', props<{ courses: CourseModel[] }>());
export const loadCoursesFailure = createAction('[Course] Load Courses Failure', props<{ error: any }>());

export const loadCourse = createAction('[Course] Load Course', props<{ id: number }>());
export const loadCourseSuccess = createAction('[Course] Load Course Success', props<{ course: CourseModel }>());
export const loadCourseFailure = createAction('[Course] Load Course Failure', props<{ error: any }>());

export const createCourse = createAction('[Course] Create Course', props<{ course: CourseModel }>());
export const createCourseSuccess = createAction('[Course] Create Course Success', props<{ course: CourseModel }>());
export const createCourseFailure = createAction('[Course] Create Course Failure', props<{ error: any }>());

export const updateCourse = createAction('[Course] Update Course', props<{ id: number, course: CourseModel }>());
export const updateCourseSuccess = createAction('[Course] Update Course Success', props<{ course: CourseModel }>());
export const updateCourseFailure = createAction('[Course] Update Course Failure', props<{ error: any }>());

export const deleteCourse = createAction('[Course] Delete Course', props<{ id: number }>());
export const deleteCourseSuccess = createAction('[Course] Delete Course Success', props<{ id: number }>());
export const deleteCourseFailure = createAction('[Course] Delete Course Failure', props<{ error: any }>());