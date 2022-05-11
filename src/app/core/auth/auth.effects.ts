import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType, OnInitEffects } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, exhaustMap, map, tap, withLatestFrom } from 'rxjs/operators';

import { TOKEN_STORAGE_KEY, UserCredentials } from '../common';
import * as AuthActions from './auth.actions';
import { AuthService } from './auth.service';

@Injectable()
export class AuthEffects implements OnInitEffects {
  init = createEffect(() => {
    return this.actions.pipe(
      ofType(AuthActions.init),
      withLatestFrom(of(localStorage.getItem(TOKEN_STORAGE_KEY))),
      map(([_, token]) => {
        if (token) {
          return AuthActions.fetchUser({ token: token });
        } else {
          return AuthActions.logout();
        }
      })
    );
  });

  fetchUser = createEffect(() => {
    return this.actions.pipe(
      ofType(AuthActions.fetchUser),
      map((action) => action.token),
      exhaustMap((token: string) =>
        this.authService.getUserInfo(token).pipe(map((user) => AuthActions.updateUser({ user })))
      )
    );
  });

  logout = createEffect(
    () => {
      return this.actions.pipe(
        ofType(AuthActions.logout),
        tap(() => {
          localStorage.removeItem(TOKEN_STORAGE_KEY);
          this.router.navigate(['/']);
        })
      );
    },
    { dispatch: false }
  );

  login = createEffect(() => {
    return this.actions.pipe(
      ofType(AuthActions.login),
      map((action) => action.credentials),
      exhaustMap((cred: UserCredentials) =>
        this.authService.login(cred).pipe(
          map(({ token }) => AuthActions.loginSuccess({ token })),
          catchError((error) => of(AuthActions.loginFailure({ error })))
        )
      )
    );
  });

  loginSuccess = createEffect(() => {
    return this.actions.pipe(
      ofType(AuthActions.loginSuccess),
      tap(({ token }) => {
        localStorage.setItem(TOKEN_STORAGE_KEY, token);
        this.router.navigate(['/']);
      }),
      map(({ token }) => AuthActions.fetchUser({ token: token }))
    );
  });

  constructor(private actions: Actions, private authService: AuthService, private router: Router) {}

  ngrxOnInitEffects(): Action {
    return AuthActions.init();
  }
}
