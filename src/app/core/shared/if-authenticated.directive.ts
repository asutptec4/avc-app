import {
  ChangeDetectorRef,
  Directive,
  EmbeddedViewRef,
  Input,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';
import { Subject, takeUntil, tap } from 'rxjs';

import { AuthService } from '../auth';

@Directive({
  selector: '[appIfAuthenticated]'
})
export class IfAuthenticatedDirective implements OnInit, OnDestroy {
  private loginTemplateRef: TemplateRef<any> | null = null;
  private logoutTemplateRef: TemplateRef<any> | null = null;
  private loginViewRef: EmbeddedViewRef<any> | null = null;
  private logoutViewRef: EmbeddedViewRef<any> | null = null;

  private readonly destroy = new Subject<void>();

  @Input() set appIfAuthenticated(templateRef: TemplateRef<any>) {
    this.loginTemplateRef = templateRef;
    this.loginViewRef = null;
  }

  constructor(
    templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private changeDetector: ChangeDetectorRef,
    private authService: AuthService
  ) {
    this.logoutTemplateRef = templateRef;
  }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

  ngOnInit(): void {
    this.authService.isAuthenticated
      .pipe(
        takeUntil(this.destroy),
        tap((isAuthenticated) => this.updateView(isAuthenticated))
      )
      .subscribe();
  }

  private updateView(isAuthenticated: boolean): void {
    if (isAuthenticated) {
      if (!this.loginViewRef) {
        this.viewContainer.clear();
        this.logoutViewRef = null;
        if (this.loginTemplateRef) {
          this.loginViewRef = this.viewContainer.createEmbeddedView(this.loginTemplateRef);
        }
      }
      this.changeDetector.detectChanges();
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
}
