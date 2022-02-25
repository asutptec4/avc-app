import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {
  transform(value: any[], ...args: unknown[]): any[] {
    if (args && args.length > 0 && value.length > 0) {
      const sortProp: string = `${args[0]}`;
      const order: string = `${args[1]}` || 'asc';
      if (value.every((v: any) => sortProp in v)) {
        return value.sort(this.sortFunction(sortProp, order));
      }
      console.warn(`orderBy is impossible for ${sortProp}`);
    }
    return value;
  }

  private sortFunction(sortProp: string, order: string): (a: any, b: any) => number {
    return (a: any, b: any) => {
      if (typeof a[sortProp] === 'string') {
        return order === 'asc' ? a[sortProp].localeCompare(b[sortProp]) : b[sortProp].localeCompare(a[sortProp]);
      } else if (typeof a[sortProp] === 'number') {
        return order === 'asc' ? a[sortProp] - b[sortProp] : b[sortProp] - a[sortProp];
      } else if (typeof a[sortProp] === 'object' && typeof a[sortProp].getTime === 'function') {
        return order === 'asc'
          ? a[sortProp].getTime() - b[sortProp].getTime()
          : b[sortProp].getTime() - a[sortProp].getTime();
      } else {
        return 0;
      }
    };
  }
}
