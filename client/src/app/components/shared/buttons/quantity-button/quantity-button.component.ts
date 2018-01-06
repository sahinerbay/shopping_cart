import { Component, Input } from '@angular/core';
import { ShoppingCartService } from '@app/_services/shopping-cart/shopping-cart.service';
import { Cart } from '@app/_interfaces/cart';

@Component({
	selector: 'app-quantity-button',
	templateUrl: './quantity-button.component.html',
	styleUrls: ['./quantity-button.component.scss']
})
export class QuantityButtonComponent {

	constructor(private shoppingCartService: ShoppingCartService) { }

	@Input() productId: Cart["_id"];
	@Input() productQuantity: Cart["quantity"];

	increaseQuantity(productId: Cart["_id"]): void {
		this.shoppingCartService.increaseItem(productId);
	}

	decreaseQuantity(productId: Cart["_id"]): void {
		this.shoppingCartService.decreaseItem(productId);
	}
}