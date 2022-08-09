import { Injectable } from '@angular/core';
import { Action, Store } from '@ngrx/store';

import { UserCredentials } from '../common';
import { login, logout } from './auth.actions';
import { selectError, selectIsAuthenticated, selectUserName } from './auth.reducer';

@Injectable()
export class AuthService {
  authError = this.store.select(selectError);
  isAuthenticated = this.store.select(selectIsAuthenticated);
  userName = this.store.select(selectUserName);

  constructor(private readonly store: Store) {}

  login(payload: UserCredentials): void {
    this.dispatch(login({ credentials: payload }));
  }

  logout(): void {
    this.dispatch(logout());
  }

  private dispatch(action: Action): void {
    this.store.dispatch(action);
  }
}
