import { createReducer, on } from '@ngrx/store';
import { EnrollmentModel } from '../../../models/enrollment.model';
import { loadEnrollmentsSuccess, addEnrollmentSuccess, deleteEnrollmentSuccess } from '../actions/enrollment.actions';
import { Action, ActionReducer } from '@ngrx/store';

export const initialEnrollmentState: EnrollmentModel[] = [];

const _enrollmentReducer = createReducer(
  initialEnrollmentState,
  on(loadEnrollmentsSuccess, (state, { enrollments }) => [...enrollments]),
  on(addEnrollmentSuccess, (state, { enrollment }) => [...state, enrollment]),
  on(deleteEnrollmentSuccess, (state, { id }) => state.filter(enrollment => enrollment.id !== id))
);

export function enrollmentReducer(state: EnrollmentModel[] | undefined, action: Action): EnrollmentModel[] {
    return _enrollmentReducer(state, action);
}