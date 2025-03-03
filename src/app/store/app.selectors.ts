import { createSelector } from '@ngrx/store';
import { AppState } from './app.state';
import { UserModel } from '../../models/user.model';
import { CourseModel } from '../../models/course.model';
import { LessonModel } from '../../models/lesson.model';
import { EnrollmentModel } from '../../models/enrollment.model';

// Selectors for users
export const selectUsers = (state: AppState) => state.users;

export const selectUserById = (userId: number) => createSelector(
  selectUsers,
  (users: UserModel[]) => users.find(user => user.id === userId)
);

// Selectors for courses
export const selectCourses = (state: AppState) => state.courses;

export const selectCourseById = (courseId: number) => createSelector(
  selectCourses,
  (courses: CourseModel[]) => courses.find(course => course.id === courseId)
);

// Selectors for lessons
export const selectLessons = (state: AppState) => state.lessons;

export const selectLessonById = (lessonId: number) => createSelector(
  selectLessons,
  (lessons: LessonModel[]) => lessons.find(lesson => lesson.id === lessonId)
);

// Selectors for authenticated user
export const selectAuthState = (state: AppState) => state.auth;

export const selectAuthUser = createSelector(
  selectAuthState,
  (authState) => authState.authUser);