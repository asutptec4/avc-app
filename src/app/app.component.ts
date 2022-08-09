import { ChangeDetectionStrategy, Component, Inject, InjectionToken } from '@angular/core';

const Window = new InjectionToken<Window>('Window', { factory: () => window });

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  constructor(@Inject(Window) private w: Window) {
    console.log(w);
  }
}
