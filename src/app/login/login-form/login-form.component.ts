import { ChangeDetectionStrategy, Component } from '@angular/core';
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

  constructor(private router: Router, private authService: AuthService) {}

  onLoginClick(): void {
    const isAuthenticated = this.authService.login(this.userName, this.userName);
    if (isAuthenticated) {
      this.router.navigate(['']);
    }
  }
}
