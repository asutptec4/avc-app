import { Injectable } from '@angular/core';
import { Action, Store } from '@ngrx/store';

import { hide, show } from './global-spinner.actions';
import { selectIsVisible } from './global-spinner.reducer';

@Injectable()
export class GlobalSpinnerFacade {
  isVisible = this.store.select(selectIsVisible);

  constructor(private readonly store: Store) {}

  hide(): void {
    this.dispatch(hide());
  }

  show(): void {
    this.dispatch(show());
  }

  private dispatch(action: Action): void {
    this.store.dispatch(action);
  }
}
