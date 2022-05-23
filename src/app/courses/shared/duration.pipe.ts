import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {
  transform(minutes: number, ...args: unknown[]): string {
    if (Number.isNaN(+minutes) || minutes < 0) {
      return '0 min';
    }
    const h = Math.floor(minutes / 60);
    const hoursStr = h ? `${h}h ` : '';
    let minutesLeft = minutes % 60;

    const s = Math.floor(minutesLeft);
    const minutesStr = s || minutes ? `${s}m` : '';

    return `${hoursStr}${minutesStr}`;
  }
}
