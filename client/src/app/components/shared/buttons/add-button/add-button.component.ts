import { Component, Input } from '@angular/core';
import { Cart } from './../../../../_interfaces/cart';
import { ShoppingCartService } from './../../../../_services/shopping-cart/shopping-cart.service';
import { ShoppingCartModalService } from './../../../../_services/shopping-cart/shopping-cart-modal.service';

@Component({
	selector: 'app-add-button',
	templateUrl: './add-button.component.html',
	styleUrls: ['./add-button.component.scss']
})
export class AddButtonComponent {

	constructor(private shoppingCartService: ShoppingCartService, private shoppingCartModalService: ShoppingCartModalService) { }

	@Input() product: Cart;

	addItem(product: Cart, quantity: number): void {
		/*Create a Cart Object that will be added to local storage inside of ShoppingCart Class*/
		let cart: Cart = {
			_id: product._id,
			title: product.title,
			unitPrice: product.unitPrice,
			imagePath: product.imagePath,
		}

		/* Add Product to Local Storage*/
		this.shoppingCartService.addItem(cart);

		/*When screen size is smaller than 480px Set Shopping Cart Modal Active*/ 
		if (window.matchMedia('screen and (max-width: 480px)').matches) {
			this.shoppingCartModalService.setModalActive();
		}
	}
}
