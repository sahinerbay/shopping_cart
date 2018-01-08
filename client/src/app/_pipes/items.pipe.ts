import { Pipe, PipeTransform } from '@angular/core';
import { ShoppingCart } from '@app/_classes';

@Pipe({
  name: 'items'
})
export class ItemsPipe implements PipeTransform {

  transform(value: ShoppingCart['totalQuantity'], args?: any): any {

	if(value > 1) {
		return `${value} items`
	}
    return `${value} item`;
  }

}
