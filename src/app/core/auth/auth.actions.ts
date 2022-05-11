import { createAction, props } from '@ngrx/store';

import { UserCredentials, UserEntity } from '../common';

export const init = createAction('[Auth] Init');

export const login = createAction('[Auth] Login', props<{ credentials: UserCredentials }>());

export const loginSuccess = createAction('[Auth] Login Success', props<{ token: string }>());

export const loginFailure = createAction('[Auth] Login Failure', props<{ error: unknown }>());

export const logout = createAction('[Auth] Logout');

export const fetchUser = createAction('[Auth] Fetch User', props<{ token: string }>());

export const updateUser = createAction('[Auth] Update User', props<{ user: UserEntity }>());
