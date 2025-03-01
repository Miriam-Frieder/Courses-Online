import { createAction, props } from '@ngrx/store';
import { EnrollmentModel } from '../../../models/enrollment.model';

export const loadEnrollments = createAction('[Enrollment] Load Enrollments');
export const loadEnrollmentsSuccess = createAction('[Enrollment] Load Enrollments Success', props<{ enrollments: EnrollmentModel[] }>());
export const loadEnrollmentsFailure = createAction('[Enrollment] Load Enrollments Failure', props<{ error: any }>());

export const addEnrollment = createAction('[Enrollment] Add Enrollment', props<{ enrollment: EnrollmentModel }>());
export const addEnrollmentSuccess = createAction('[Enrollment] Add Enrollment Success', props<{ enrollment: EnrollmentModel }>());
export const addEnrollmentFailure = createAction('[Enrollment] Add Enrollment Failure', props<{ error: any }>());

export const deleteEnrollment = createAction('[Enrollment] Delete Enrollment', props<{ id: number }>());
export const deleteEnrollmentSuccess = createAction('[Enrollment] Delete Enrollment Success', props<{ id: number }>());
export const deleteEnrollmentFailure = createAction('[Enrollment] Delete Enrollment Failure', props<{ error: any }>());