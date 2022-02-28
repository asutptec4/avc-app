import { NgModule } from '@angular/core';

import { IfAuthenticatedDirective } from './if-authenticated.directive';

const exportList = [IfAuthenticatedDirective];

@NgModule({
  declarations: [...exportList],
  exports: [...exportList]
})
export class CoreSharedModule {}
