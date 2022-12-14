import { ChangeDetectionStrategy, Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { debounceTime, filter, Subject, takeUntil, tap } from 'rxjs';

const SEARCH_DEBOUNCE_TIME = 200;
const SEARCH_MIN_LENGTH = 3;

@Component({
  selector: 'app-courses-toolbar',
  templateUrl: './courses-toolbar.component.html',
  styleUrls: ['./courses-toolbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoursesToolbarComponent implements OnInit, OnDestroy {
  @Output() searchKey: EventEmitter<string> = new EventEmitter();

  searchControl = new UntypedFormControl('');
  private readonly destroy = new Subject<void>();

  ngOnInit(): void {
    this.searchControl.valueChanges
      .pipe(
        filter((searchStr) => !searchStr || (!!searchStr && searchStr.length >= SEARCH_MIN_LENGTH)),
        debounceTime(SEARCH_DEBOUNCE_TIME),
        tap((searchStr) => {
          this.searchKey.emit(searchStr);
        }),
        takeUntil(this.destroy)
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}
