import { Component } from '@angular/core';

@Component({
  selector: 'app-courses-toolbar',
  templateUrl: './courses-toolbar.component.html',
  styleUrls: ['./courses-toolbar.component.scss']
})
export class CoursesToolbarComponent {
  searchStr: string = '';

  onAddClick(): void {
    console.log('onAddClick');
  }

  onSearchClick(): void {
    console.log(this.searchStr);
  }
}
