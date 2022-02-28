import { Injectable } from '@angular/core';

const USER_STORAGE_KEY = 'user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() {}

  login(username: string, password: string): boolean {
    localStorage.setItem(USER_STORAGE_KEY, username);
    return true;
  }

  logout(): void {
    localStorage.removeItem(USER_STORAGE_KEY);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem(USER_STORAGE_KEY);
  }

  getUserInfo(): string | null {
    return localStorage.getItem(USER_STORAGE_KEY);
  }
}
