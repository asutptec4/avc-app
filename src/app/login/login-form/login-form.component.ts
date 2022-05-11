import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import { filter, tap } from 'rxjs';

import { AuthService, login, selectError } from '../../core/auth';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginFormComponent implements OnInit {
  userName: string = '';
  password: string = '';

  constructor(private snackBar: MatSnackBar, private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.authError
      .pipe(
        filter((error) => !!error),
        tap(() => {
          this.snackBar.open('Login or password are incorrect', 'Hide', {
            duration: 3000
          });
        })
      )
      .subscribe();
  }

  onLoginClick(): void {
    this.authService.login({ username: this.userName, password: this.password });
  }
}
