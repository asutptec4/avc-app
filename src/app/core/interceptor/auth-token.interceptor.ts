import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { TOKEN_STORAGE_KEY } from '../common';

@Injectable()
export class AuthTokenInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.getToken();
    if (token) {
      request = request.clone({
        setHeaders: { Authorization: token }
      });
    }
    return next.handle(request);
  }

  private getToken(): string | null {
    return localStorage.getItem(TOKEN_STORAGE_KEY);
  }
}
