import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { AuthService } from '../../../services/auth.service';
import { login, loginSuccess, loginFailure, register, registerSuccess, registerFailure } from '../actions/auth.actions';
import { UserModel } from '../../../models/user.model';

@Injectable()
export class AuthEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(login),
      mergeMap(action =>
        this.authService.login({ email: action.email, password: action.password }).pipe(
          map((response: any) => {
            const user: UserModel = {
              id: response.userId,
              name: response.username,
              email: action.email,
              password: action.password,
              role: response.role
            };
            return loginSuccess({ user });
          }),
          catchError(error => of(loginFailure({ error })))
        )
      )
    )
  );

  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(register),
      mergeMap(action =>
        this.authService.register(action.user).pipe(
          map(response => {
            const user: UserModel = {
              id: response.userId,
              name: action.user.name,
              email: action.user.email,
              password: action.user.password,
              role: action.user.role
            };
            return registerSuccess({ user });
          }),
          catchError(error => of(registerFailure({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService
  ) {}
}