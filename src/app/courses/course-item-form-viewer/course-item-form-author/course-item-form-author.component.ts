import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';

export interface Author {
  name: string;
}

@Component({
  selector: 'app-course-item-form-author',
  templateUrl: './course-item-form-author.component.html',
  styleUrls: ['./course-item-form-author.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseItemFormAuthorComponent {
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  authors: Author[] = [{ name: 'Steve' }, { name: 'Andrew' }, { name: 'Michael' }];

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value) {
      this.authors.push({ name: value });
    }
    event.chipInput!.clear();
  }

  remove(author: Author): void {
    const index = this.authors.indexOf(author);
    if (index >= 0) {
      this.authors.splice(index, 1);
    }
  }
}
