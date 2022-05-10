import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { UserService } from '../../core/common';
import { hide, show } from '../../core/spinner/global-spinner/state/global-spinner.actions';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginFormComponent {
  userName: string = '';
  password: string = '';
  showError: boolean = false;

  constructor(
    private router: Router,
    private userService: UserService,
    private snackBar: MatSnackBar,
    private store: Store
  ) {}

  onLoginClick(): void {
    this.store.dispatch(show());
    this.userService.login(this.userName, this.password).subscribe((isAuthenticated) => {
      this.showError = !isAuthenticated;
      if (isAuthenticated) {
        this.router.navigate(['']);
      } else {
        this.snackBar.open('Login or password are incorrect', 'Hide', {
          duration: 3000
        });
      }
      this.store.dispatch(hide());
    });
  }
}
