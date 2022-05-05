import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable, of, ReplaySubject, Subject, tap } from 'rxjs';

import { UserEntity } from '../common';
import { UserAuth } from '../common/user-auth.interface';

export const TOKEN_STORAGE_KEY = 'token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: Subject<UserEntity | null> = new ReplaySubject(1);
  currentUser: Observable<UserEntity | null> = this.currentUserSubject.asObservable();

  private isAuthenticatedSubject: Subject<boolean> = new BehaviorSubject<boolean>(false);
  isAuthenticated: Observable<boolean> = this.isAuthenticatedSubject.asObservable();

  constructor(private http: HttpClient) {
    const token = this.getToken();
    if (token) {
      this.updateCurrentUserAsync(token);
    }
  }

  private getToken(): string | null {
    return localStorage.getItem(TOKEN_STORAGE_KEY);
  }

  private updateCurrentUserAsync(token: string) {
    this.getUserInfo(token).subscribe((user) => this.updateCurrentUser(user));
  }

  private getUserInfo(token: string): Observable<UserEntity | null> {
    return this.http
      .post<UserEntity>('http://localhost:3004/auth/userinfo', { token })
      .pipe(catchError(() => of(null)));
  }

  private updateCurrentUser(user: UserEntity | null) {
    this.isAuthenticatedSubject.next(user ? true : false);
    this.currentUserSubject.next(user);
  }

  login(username: string, password: string): Observable<boolean> {
    return this.http.post<UserAuth>('http://localhost:3004/auth/login', { login: username, password: password }).pipe(
      tap((res) => {
        localStorage.setItem(TOKEN_STORAGE_KEY, res.token);
        this.updateCurrentUserAsync(res.token);
      }),
      map((res) => !!res.token),
      catchError(() => of(false))
    );
  }

  logout(): void {
    localStorage.removeItem(TOKEN_STORAGE_KEY);
    this.updateCurrentUser(null);
  }
}
