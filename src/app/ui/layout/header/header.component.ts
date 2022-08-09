import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';

import { AuthService } from '../../../core/auth';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  userName: Observable<string | undefined> = this.authService.userName;

  constructor(private authService: AuthService) {}

  onLogoutClick(): void {
    this.authService.logout();
  }
}
