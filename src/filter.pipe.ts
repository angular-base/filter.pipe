import { Pipe, PipeTransform } from '@angular/core';
import { isUndefined } from 'util';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform (items: any, query?: string): any {

    if (isUndefined(query)) {
      return items;
    }

    return items.filter(item => Object.keys(item)
      .filter(key => item[key] !== null)
      .some(key => (item[key].toString().toLowerCase()).indexOf(query.toLowerCase()) !== -1));
  }

}
