import { createFeature, createReducer, on } from '@ngrx/store';

import * as GlobalSpinnerActions from './global-spinner.actions';

export const statusFeatureKey = 'status';

export interface State {
  isVisible: boolean;
}

export const initialState: State = {
  isVisible: false
};

export const globalSpinnerFeature = createFeature({
  name: 'globalSpinner',
  reducer: createReducer(
    initialState,
    on(
      GlobalSpinnerActions.show,
      (state): State => ({
        ...state,
        isVisible: true
      })
    ),
    on(
      GlobalSpinnerActions.hide,
      (state): State => ({
        ...state,
        isVisible: false
      })
    )
  )
});

export const { name, reducer, selectGlobalSpinnerState, selectIsVisible } = globalSpinnerFeature;
