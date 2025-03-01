import { createAction, props } from '@ngrx/store';
import { UserModel } from '../../../models/user.model';

export const loadUsers = createAction('[User] Load Users');
export const loadUsersSuccess = createAction('[User] Load Users Success', props<{ users: UserModel[] }>());
export const loadUsersFailure = createAction('[User] Load Users Failure', props<{ error: any }>());

export const addUser = createAction('[User] Add User', props<{ user: UserModel }>());
export const addUserSuccess = createAction('[User] Add User Success', props<{ user: UserModel }>());
export const addUserFailure = createAction('[User] Add User Failure', props<{ error: any }>());

export const updateUser = createAction('[User] Update User', props<{ user: UserModel }>());
export const updateUserSuccess = createAction('[User] Update User Success', props<{ user: UserModel }>());
export const updateUserFailure = createAction('[User] Update User Failure', props<{ error: any }>());

export const deleteUser = createAction('[User] Delete User', props<{ id: number }>());
export const deleteUserSuccess = createAction('[User] Delete User Success', props<{ id: number }>());
export const deleteUserFailure = createAction('[User] Delete User Failure', props<{ error: any }>());