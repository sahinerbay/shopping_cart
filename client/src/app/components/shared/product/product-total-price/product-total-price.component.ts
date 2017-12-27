import { Component, Input } from '@angular/core';
import { Cart } from './../../../../_interfaces/cart';

@Component({
	selector: 'app-product-total-price',
	templateUrl: './product-total-price.component.html',
	styleUrls: ['./product-total-price.component.scss']
})
export class ProductTotalPriceComponent {

	@Input() productTotalPrice: Cart["totalPrice"];

}