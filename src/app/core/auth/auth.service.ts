import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject, shareReplay, Subject } from 'rxjs';

import { UserEntity } from '../common';

const USER_STORAGE_KEY = 'user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: Subject<UserEntity | null> = new ReplaySubject(1);
  currentUser: Observable<UserEntity | null> = this.currentUserSubject.asObservable();

  private isAuthenticatedSubject: Subject<boolean> = new BehaviorSubject<boolean>(false);
  isAuthenticated: Observable<boolean> = this.isAuthenticatedSubject.asObservable();

  constructor() {
    const user = this.getUserInfo();
    this.updateCurrentUser(user);
  }

  private updateCurrentUser(user: UserEntity | null) {
    this.isAuthenticatedSubject.next(user ? true : false);
    this.currentUserSubject.next(user);
  }

  login(username: string, password: string): boolean {
    localStorage.setItem(USER_STORAGE_KEY, username);
    this.updateCurrentUser(this.getUserInfo());
    return true;
  }

  logout(): void {
    localStorage.removeItem(USER_STORAGE_KEY);
    this.updateCurrentUser(null);
  }

  getUserInfo(): UserEntity | null {
    const userName = localStorage.getItem(USER_STORAGE_KEY);
    if (userName) {
      return { id: userName, firstName: userName, lastName: userName };
    }
    return null;
  }
}
