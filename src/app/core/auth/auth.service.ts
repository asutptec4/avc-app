import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';

import { UserService } from '../common';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticatedSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isAuthenticated: Observable<boolean> = this.isAuthenticatedSubject.asObservable();

  constructor(private userService: UserService) {
    this.userService.currentUser.pipe(tap((user) => this.isAuthenticatedSubject.next(user ? true : false))).subscribe();
  }

  isUserAuthenticated(): boolean {
    return this.isAuthenticatedSubject.getValue();
  }
}
