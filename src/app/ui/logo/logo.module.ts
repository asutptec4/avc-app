import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';

import { LogoComponent } from './logo.component';

@NgModule({
  declarations: [LogoComponent],
  imports: [CommonModule, MatIconModule, TranslateModule],
  exports: [LogoComponent]
})
export class LogoModule {}
