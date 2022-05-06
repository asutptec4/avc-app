import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { GlobalSpinnerService } from './global-spinner.service';

@Component({
  selector: 'app-global-spinner',
  templateUrl: './global-spinner.component.html',
  styleUrls: ['./global-spinner.component.scss']
})
export class GlobalSpinnerComponent {
  isVisible: Observable<boolean> = this.globalSpinnerService.isVisible;

  constructor(private globalSpinnerService: GlobalSpinnerService) {}
}
