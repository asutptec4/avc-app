import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

import { AuthService } from '../../core/auth/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginFormComponent {
  userName: string = '';
  showError: boolean = false;

  constructor(private router: Router, private authService: AuthService, private _snackBar: MatSnackBar) {}

  onLoginClick(): void {
    this.authService.login(this.userName, this.userName).subscribe((isAuthenticated) => {
      this.showError = !isAuthenticated;
      if (isAuthenticated) {
        this.router.navigate(['']);
      } else {
        this._snackBar.open('Login or password are incorrect', 'Hide', {
          duration: 3000
        });
      }
    });
  }
}
