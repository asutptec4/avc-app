import { ChangeDetectionStrategy, Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { debounceTime, filter, Subject, tap } from 'rxjs';

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

  private readonly destroy = new Subject<void>();
  private readonly searchStr: Subject<string> = new Subject();

  ngOnInit(): void {
    this.searchStr
      .asObservable()
      .pipe(
        filter((searchStr) => !searchStr || (!!searchStr && searchStr.length > SEARCH_MIN_LENGTH)),
        debounceTime(SEARCH_DEBOUNCE_TIME),
        tap((searchStr) => {
          this.searchKey.emit(searchStr);
        })
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

  onSearchKeyUp(input: KeyboardEvent): void {
    this.searchStr.next((input?.target as HTMLInputElement).value);
  }
}
