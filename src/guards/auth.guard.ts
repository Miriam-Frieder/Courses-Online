import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app/store/app.state';
import { selectAuthUser } from '../app/store/app.selectors';
import { map, take } from 'rxjs/operators';

export const authGuard: CanActivateFn = (route, state) => {
  const store = inject(Store<AppState>);
  const router = inject(Router);

  return store.select(selectAuthUser).pipe(
    take(1),
    map(authUser => {
      if (authUser) {
        return true;
      } else {
        router.navigate(['/']); // Navigate to home page if not authorized
        return false;
      }
    })
  );
};