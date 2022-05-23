import { ChangeDetectionStrategy, Component, Input, OnChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { CourseEntity } from '../../common';

@Component({
  selector: 'app-course-item-form',
  templateUrl: './course-item-form.component.html',
  styleUrls: ['./course-item-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseItemFormComponent implements OnChanges {
  @Input() course!: CourseEntity;
  @Input() form!: FormGroup;

  ngOnChanges(): void {
    if (!this.form) {
      this.form = new FormGroup({
        name: new FormControl(null, Validators.required),
        description: new FormControl(null, Validators.required),
        date: new FormControl(null, Validators.required),
        length: new FormControl(null, Validators.required),
        authors: new FormControl([], Validators.required)
      });
    }
    if (this.course) {
      this.form.patchValue(this.course);
    }
  }
}
