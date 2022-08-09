import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-courses-viewer',
  templateUrl: './courses-viewer.component.html',
  styleUrls: ['./courses-viewer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoursesViewerComponent {
  searchKey: string = '';

  onSearchKeyChange(key: string): void {
    this.searchKey = key;
  }
}
