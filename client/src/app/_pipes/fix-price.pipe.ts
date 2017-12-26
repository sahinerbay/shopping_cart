import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fixPrice'
})
export class FixPricePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.toFixed(2);
  }

}
