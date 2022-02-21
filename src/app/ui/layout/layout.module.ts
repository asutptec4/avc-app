import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './footers/footer.component';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [LayoutComponent, HeaderComponent, MainComponent, FooterComponent],
  imports: [CommonModule, RouterModule]
})
export class LayoutModule {}