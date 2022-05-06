import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalSpinnerService {
  private readonly isVisibleSubject: Subject<boolean> = new BehaviorSubject<boolean>(false);
  isVisible: Observable<boolean> = this.isVisibleSubject.asObservable();

  show(): void {
    this.isVisibleSubject.next(true);
  }

  hide(): void {
    this.isVisibleSubject.next(false);
  }
}
