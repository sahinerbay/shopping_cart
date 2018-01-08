import { Pipe, PipeTransform } from '@angular/core';
import { Cart } from '@app/_interfaces/cart';

@Pipe({
  name: 'fixPrice'
})
export class FixPricePipe implements PipeTransform {

  transform(value: Cart["totalPrice"], args?: any): any {
    return value.toFixed(2);
  }

}