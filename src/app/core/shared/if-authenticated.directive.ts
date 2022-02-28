import { Directive, EmbeddedViewRef, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

import { AuthService } from '../auth/auth.service';

@Directive({
  selector: '[appIfAuthenticated]'
})
export class IfAuthenticatedDirective implements OnInit {
  private loginTemplateRef: TemplateRef<any> | null = null;
  private logoutTemplateRef: TemplateRef<any> | null = null;
  private loginViewRef: EmbeddedViewRef<any> | null = null;
  private logoutViewRef: EmbeddedViewRef<any> | null = null;

  @Input() set appIfAuthenticated(templateRef: TemplateRef<any>) {
    this.loginTemplateRef = templateRef;
    this.loginViewRef = null;
    this.updateView();
  }

  constructor(
    templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private authService: AuthService
  ) {
    this.logoutTemplateRef = templateRef;
  }

  ngOnInit(): void {
    this.updateView();
  }

  private updateView(): void {
    if (this.isAuthenticated()) {
      if (!this.loginViewRef) {
        this.viewContainer.clear();
        this.logoutViewRef = null;
        if (this.loginTemplateRef) {
          this.loginViewRef = this.viewContainer.createEmbeddedView(this.loginTemplateRef);
        }
      }
    } else {
      if (!this.logoutViewRef) {
        this.viewContainer.clear();
        this.loginViewRef = null;
        if (this.logoutTemplateRef) {
          this.logoutViewRef = this.viewContainer.createEmbeddedView(this.logoutTemplateRef);
        }
      }
    }
  }

  private isAuthenticated(): boolean {
    return this.authService.isAuthenticated();
  }
}
