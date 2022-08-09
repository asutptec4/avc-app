import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

import { LangSelectorComponent } from './lang-selector.component';

@NgModule({
  declarations: [LangSelectorComponent],
  imports: [CommonModule, MatIconModule, MatMenuModule, MatButtonModule],
  exports: [LangSelectorComponent]
})
export class LangSelectorModule {}
