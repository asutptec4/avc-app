import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { GlobalSpinnerFacade } from './state/global-spinner.facade';

@Component({
  selector: 'app-global-spinner',
  templateUrl: './global-spinner.component.html',
  styleUrls: ['./global-spinner.component.scss']
})
export class GlobalSpinnerComponent {
  isVisible: Observable<boolean> = this.globalSpinnerFacade.isVisible;

  constructor(private globalSpinnerFacade: GlobalSpinnerFacade) {}
}
