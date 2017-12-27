import { Component, Input } from '@angular/core';
import { ShoppingCartModalService } from './../../../../_services/shopping-cart/shopping-cart-modal.service';

@Component({
	selector: 'app-shopping-cart-modal',
	templateUrl: './shopping-cart-modal.component.html',
	styleUrls: ['./shopping-cart-modal.component.scss']
})
export class ShoppingCartModalComponent {

	constructor(private shoppingCartModalService: ShoppingCartModalService) { }

	@Input() products;

	isShoppingCartEmpty(products): boolean {
		if (products.items.length !== 0) {
			return true;
		}
		return false;
	}

}
