import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

import { UserService } from '../../core/common';

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

  constructor(private router: Router, private userService: UserService, private snackBar: MatSnackBar) {}

  onLoginClick(): void {
    this.userService.login(this.userName, this.password).subscribe((isAuthenticated) => {
      this.showError = !isAuthenticated;
      if (isAuthenticated) {
        this.router.navigate(['']);
      } else {
        this.snackBar.open('Login or password are incorrect', 'Hide', {
          duration: 3000
        });
      }
    });
  }
}
