import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { UserAuth, UserCredentials, UserEntity } from '../common';

@Injectable()
export class AuthDataService {
  constructor(private http: HttpClient) {}

  getUserInfo(token: string): Observable<UserEntity> {
    return this.http.post<UserEntity>('http://localhost:3004/auth/userinfo', { token });
  }

  login(credentials: UserCredentials): Observable<UserAuth> {
    return this.http.post<UserAuth>('http://localhost:3004/auth/login', {
      login: credentials.username,
      password: credentials.password
    });
  }
}
