import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { Observable } from 'rxjs';

import { Author } from '../../../core/common';
import { AuthorsDataService } from '../author/authors-data.service';

@Component({
  selector: 'app-course-item-form-author',
  templateUrl: './course-item-form-author.component.html',
  styleUrls: ['./course-item-form-author.component.scss'],
  providers: [AuthorsDataService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseItemFormAuthorComponent {
  @Input() control!: FormControl | null;

  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  selectedAuthors: Author[] = [
    { id: '1', name: 'Steve', lastName: 'Steve' },
    { id: '1', name: 'Andrew', lastName: 'Andrew' },
    { id: '1', name: 'Michael', lastName: 'Michael' }
  ];

  allAuthors: Observable<Author[]> = this.authorsDataService.getAll();

  constructor(private authorsDataService: AuthorsDataService) {}

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value) {
      this.selectedAuthors.push({ id: value, name: value, lastName: value });
    }
    event.chipInput!.clear();
  }

  remove(author: Author): void {
    const index = this.selectedAuthors.indexOf(author);
    if (index >= 0) {
      this.selectedAuthors.splice(index, 1);
    }
  }
}
