import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { selectIsVisible } from './state/global-spinner.reducer';

@Component({
  selector: 'app-global-spinner',
  templateUrl: './global-spinner.component.html',
  styleUrls: ['./global-spinner.component.scss']
})
export class GlobalSpinnerComponent {
  isVisible: Observable<boolean> = this.store.select(selectIsVisible);

  constructor(private store: Store) {}
}
