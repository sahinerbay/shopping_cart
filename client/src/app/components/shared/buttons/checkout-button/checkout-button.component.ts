import { Component } from '@angular/core';
import { ShoppingCartModalService } from '@app/_services/shopping-cart/shopping-cart-modal.service';

@Component({
	selector: 'app-checkout-button',
	templateUrl: './checkout-button.component.html',
	styleUrls: ['./checkout-button.component.scss']
})
export class CheckoutButtonComponent {

	constructor(private shoppingCartModalService: ShoppingCartModalService) { }

	onCheckOut() {
		this.shoppingCartModalService.setModalInactive();
	}
}
