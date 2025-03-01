import { UserModel } from '../../models/user.model';
import { CourseModel } from '../../models/course.model';
import { LessonModel } from '../../models/lesson.model';
import { EnrollmentModel } from '../../models/enrollment.model';

export interface AppState {
    users: UserModel[];
    courses: CourseModel[];
    lessons: LessonModel[];
    enrollments: EnrollmentModel[];
    authUser: UserModel | null;
}

export const initialState: AppState = {
    users: [],
    courses: [],
    lessons: [],
    enrollments: [],
    authUser: null
};
