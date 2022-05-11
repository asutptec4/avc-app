import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { StoreModule } from '@ngrx/store';

import { GlobalSpinnerComponent } from './global-spinner/global-spinner.component';
import { GlobalSpinnerFacade } from './global-spinner/state/global-spinner.facade';
import { globalSpinnerFeature } from './global-spinner/state/global-spinner.reducer';

@NgModule({
  declarations: [GlobalSpinnerComponent],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    StoreModule.forFeature(globalSpinnerFeature.name, globalSpinnerFeature.reducer)
  ],
  exports: [GlobalSpinnerComponent],
  providers: [GlobalSpinnerFacade]
})
export class SpinnerModule {}
