import { ChangeDetectionStrategy, Component } from '@angular/core';
import { map, Observable } from 'rxjs';

import { UserService } from '../../../core/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  userName: Observable<string | undefined> = this.userService.currentUser.pipe(map((user) => user?.login));

  constructor(private userService: UserService) {}

  onLogoutClick(): void {
    this.userService.logout();
  }
}
