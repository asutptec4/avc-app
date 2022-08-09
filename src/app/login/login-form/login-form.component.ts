import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { filter, tap } from 'rxjs';

import { AuthService } from '../../core/auth';
import { UserCredentials } from '../../core/common';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginFormComponent implements OnInit {
  userCredentials: UserCredentials = { username: '', password: '' };

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
    this.authService.login(this.userCredentials);
  }
}
