import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AuthDataService, AuthEffects, AuthGuard, AuthService, name, reducer } from '.';

@NgModule({
  imports: [CommonModule, StoreModule.forFeature(name, reducer), EffectsModule.forFeature([AuthEffects])],
  providers: [AuthDataService, AuthService, AuthGuard]
})
export class AuthModule {}
