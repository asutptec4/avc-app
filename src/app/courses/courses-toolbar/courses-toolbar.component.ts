import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-courses-toolbar',
  templateUrl: './courses-toolbar.component.html',
  styleUrls: ['./courses-toolbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoursesToolbarComponent {
  @Output() searchKey: EventEmitter<string> = new EventEmitter();
  searchStr: string = '';

  onSearchClick(): void {
    this.searchKey.emit(this.searchStr);
  }
}
