import { createReducer, on, Action } from '@ngrx/store';
import { loginSuccess, loginFailure, registerSuccess, registerFailure, logout } from '../actions/auth.actions';
import { AuthState } from '../app.state';
import { UserModel } from '../../../models/user.model';

export const initialAuthState: AuthState = {
  authUser: null,
  error: null
};

const _authReducer = createReducer(
  initialAuthState,
  on(loginSuccess, (state, { user }) => {
    console.log('Login Success:', user);
    return {
      ...state,
      authUser: user,
      error: null
    };
  }),
  on(loginFailure, (state, { error }) => {
    console.log('Login Failure:', error);
    return {
      ...state,
      authUser: null,
      error
    };
  }),
  on(registerSuccess, (state, { user }) => {
    console.log('Register Success:', user);
    return {
      ...state,
      authUser: user,
      error: null
    };
  }),
  on(registerFailure, (state, { error }) => {
    console.log('Register Failure:', error);
    return {
      ...state,
      authUser: null,
      error
    };
  }),
  on(logout, state => {
    console.log('Logout');
    return {
      ...state,
      authUser: null,
      error: null
    };
  })
);

export function authReducer(state: AuthState | undefined, action: Action): AuthState {
  return _authReducer(state, action);
}