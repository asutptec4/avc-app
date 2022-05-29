import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
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

  constructor(private authService: AuthService, private translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use('en');
  }

  onLogoutClick(): void {
    this.authService.logout();
  }
}
