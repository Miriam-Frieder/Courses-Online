import { createReducer, on } from '@ngrx/store';
import { loginSuccess, loginFailure, registerSuccess, registerFailure, logout } from '../actions/auth.actions';
import { UserModel } from '../../../models/user.model';
import { Action, ActionReducer } from '@ngrx/store';

export interface AuthState {
  user: UserModel | null;
  error: any;
}

export const initialAuthState: AuthState = {
  user: null,
  error: null
};

const _authReducer = createReducer(
  initialAuthState,
  on(loginSuccess, (state, { user }) => ({ ...state, user, error: null })),
  on(loginFailure, (state, { error }) => ({ ...state, user: null, error })),
  on(registerSuccess, (state, { user }) => ({ ...state, user, error: null })),
  on(registerFailure, (state, { error }) => ({ ...state, user: null, error })),
  on(logout, state => ({ ...state, user: null, error: null }))
);

export function authReducer(state: AuthState | undefined, action: Action): AuthState {
    return _authReducer(state, action);
}