import { ChangeDetectionStrategy, Component } from '@angular/core';
import { map, Observable } from 'rxjs';

import { AuthService } from '../../../core/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  userName: Observable<string | undefined> = this.authService.currentUser.pipe(map((user) => user?.login));

  constructor(private authService: AuthService) {}

  onLogoutClick(): void {
    this.authService.logout();
  }
}
