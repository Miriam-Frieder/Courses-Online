import { UserModel } from '../../models/user.model';
import { CourseModel } from '../../models/course.model';
import { LessonModel } from '../../models/lesson.model';

export interface AuthState {
  authUser: UserModel | null;
  error: any;
}

export interface AppState {
  users: UserModel[];
  courses: CourseModel[];
  lessons: LessonModel[];
  auth: AuthState;
}

export const initialState: AppState = {
  users: [],
  courses: [],
  lessons: [],
  auth: {
    authUser: null,
    error: null
  }
};