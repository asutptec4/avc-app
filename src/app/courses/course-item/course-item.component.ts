import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { CourseEntity } from '../common';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseItemComponent {
  @Input() course!: CourseEntity;
  @Input() isActionsDisabled: boolean = false;
  @Output() editAction: EventEmitter<void> = new EventEmitter();
  @Output() deleteAction: EventEmitter<void> = new EventEmitter();

  onDeleteClick(): void {
    this.deleteAction.emit();
  }

  onEditClick(): void {
    this.editAction.emit();
  }
}
