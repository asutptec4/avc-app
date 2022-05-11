import { createFeature, createReducer, createSelector, on } from '@ngrx/store';

import { UserEntity } from '../common';
import * as AuthActions from './auth.actions';

export interface State {
  user: UserEntity | null;
  error: unknown;
  isAuthenticated: boolean;
}

export const initialState: State = {
  user: null,
  error: null,
  isAuthenticated: false
};

export const authFeature = createFeature({
  name: 'auth',
  reducer: createReducer(
    initialState,
    on(AuthActions.loginSuccess, (state): State => ({ ...state, isAuthenticated: true })),
    on(AuthActions.logout, (): State => initialState),
    on(AuthActions.loginFailure, (state, { error }): State => ({ ...state, error })),
    on(AuthActions.updateUser, (state, { user }): State => ({ ...state, user, isAuthenticated: !!user }))
  )
});

export const { name, reducer, selectAuthState, selectUser, selectError, selectIsAuthenticated } = authFeature;

export const selectUserName = createSelector(selectUser, (user) => user?.login);
