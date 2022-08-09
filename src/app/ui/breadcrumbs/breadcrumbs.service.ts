import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbsService {
  private crumbsSubject: Subject<string[]> = new BehaviorSubject<string[]>(['Courses']);
  crumbs: Observable<string[]> = this.crumbsSubject.asObservable();

  updateCrumbs(crumbs: string[]): void {
    this.crumbsSubject.next(crumbs);
  }
}
