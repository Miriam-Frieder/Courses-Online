import { createReducer, on } from '@ngrx/store';
import { UserModel } from '../../../models/user.model';
import { loadUsersSuccess, addUserSuccess, updateUserSuccess, deleteUserSuccess } from '../actions/user.actions';
import { Action, ActionReducer } from '@ngrx/store';

export const initialUserState: UserModel[] = [];

const _userReducer = createReducer(
  initialUserState,
  on(loadUsersSuccess, (state, { users }) => [...users]),
  on(addUserSuccess, (state, { user }) => [...state, user]),
  on(updateUserSuccess, (state, { user }) => state.map(u => u.id === user.id ? user : u)),
  on(deleteUserSuccess, (state, { id }) => state.filter(user => user.id !== id))
);

export function userReducer(state: UserModel[] | undefined, action: Action): UserModel[] {
    return _userReducer(state, action);
}