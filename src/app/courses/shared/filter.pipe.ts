import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(value: any[], ...args: unknown[]): any[] {
    if (args && args.length > 0 && value.length > 0) {
      const filterProps: string[] = Array.isArray(args[0]) ? args[0].map((prop) => `${prop}`) : [];
      const filterKey: string = `${args[1]}`.toLowerCase();
      if (filterKey) {
        return value.filter((v) => {
          return filterProps.some((prop) => `${v[prop]}`.toLowerCase().includes(filterKey));
        });
      }
    }
    return value;
  }
}
