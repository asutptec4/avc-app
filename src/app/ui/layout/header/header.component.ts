import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { logout, selectUserName } from '../../../core/auth';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  userName: Observable<string | undefined> = this.store.select(selectUserName);

  constructor(private store: Store) {}

  onLogoutClick(): void {
    this.store.dispatch(logout());
  }
}
