import { Directive, HostBinding, Input } from '@angular/core';

import { CourseEntity } from '../common';

export const FRESH_COURSE_BORDER_COLOR = '#75e900';
export const UPCOMING_COURSE_BORDER_COLOR = '#0336ff';

@Directive({
  selector: '[appHighlightCourse]'
})
export class HighlightCourseDirective {
  @Input() course: CourseEntity | undefined;
  @HostBinding('style.border') get borderColor(): string {
    let color = this.getColorByDate();
    return color ? `3px solid ${color}` : '';
  }

  private getColorByDate(): string {
    const now = Date.now();
    const courseCreationTime = this.course?.creationDate.getTime() || 0;
    let color = '';
    if (courseCreationTime > now) {
      color = UPCOMING_COURSE_BORDER_COLOR;
    } else if (courseCreationTime > now - 14 * 24 * 60 * 60 * 1000) {
      color = FRESH_COURSE_BORDER_COLOR;
    }
    return color;
  }
}
