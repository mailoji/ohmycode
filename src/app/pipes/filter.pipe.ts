import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: any, arg: any): any {
    const result = [];
    for (const l of value) {
      if (l.user.id.toString().indexOf(arg) > -1) {
        result.push(l);
      }
    }
    return result;
  }
}
