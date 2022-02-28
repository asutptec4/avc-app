import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  userName: string = '';

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.userName = this.authService.getUserInfo() ?? '';
  }

  onLogoutClick(): void {
    this.authService.logout();
  }
}
