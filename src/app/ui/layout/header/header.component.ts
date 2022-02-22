import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  onLoginClick(): void {
    console.log('onLoginClick');
  }

  onLogoutClick(): void {
    console.log('onLogoutClick');
  }
}
