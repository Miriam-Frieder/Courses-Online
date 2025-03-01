import { createAction, props } from '@ngrx/store';
import { UserModel } from '../../../models/user.model';

export const login = createAction('[Auth] Login', props<{ email: string; password: string }>());
export const loginSuccess = createAction('[Auth] Login Success', props<{ user: UserModel }>());
export const loginFailure = createAction('[Auth] Login Failure', props<{ error: any }>());

export const register = createAction('[Auth] Register', props<{ user: Omit<UserModel,'id'> }>());
export const registerSuccess = createAction('[Auth] Register Success', props<{ user: UserModel }>());
export const registerFailure = createAction('[Auth] Register Failure', props<{ error: any }>());

export const logout = createAction('[Auth] Logout');