import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'items'
})
export class ItemsPipe implements PipeTransform {

  transform(value: any, args?: any): any {

	if(value > 1) {
		return `${value} items`
	}
    return `${value} item`;
  }

}
