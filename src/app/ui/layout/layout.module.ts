import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';

import { CoreSharedModule } from '../../core/shared/core-shared.module';
import { SpinnerModule } from '../../core/spinner/spinner.module';
import { LogoModule } from '../logo/logo.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [LayoutComponent, HeaderComponent, MainComponent, FooterComponent],
  imports: [
    CommonModule,
    RouterModule,
    LogoModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    CoreSharedModule,
    SpinnerModule
  ]
})
export class LayoutModule {}
