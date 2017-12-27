import { Component, Input } from '@angular/core';
import { ShoppingCartService } from './../../../../_services/shopping-cart/shopping-cart.service';
import { Cart } from './../../../../_interfaces/cart';

@Component({
	selector: 'app-remove-button',
	templateUrl: './remove-button.component.html',
	styleUrls: ['./remove-button.component.scss']
 })
export class RemoveButtonComponent {

	constructor(private shoppingCartService: ShoppingCartService) { }

	@Input() productId: Cart["_id"];

	removeProduct(productId: Cart["_id"]): void {
		this.shoppingCartService.removeItem(productId);
	}

}