import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { GlobalSpinnerComponent } from './global-spinner/global-spinner.component';

@NgModule({
  declarations: [GlobalSpinnerComponent],
  imports: [CommonModule, MatProgressSpinnerModule],
  exports: [GlobalSpinnerComponent]
})
export class SpinnerModule {}
