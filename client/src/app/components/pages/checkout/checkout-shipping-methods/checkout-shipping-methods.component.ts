import { Component, OnInit, OnDestroy } from '@angular/core';
import { ShoppingCartStateService } from './../../../../_services/shopping-cart/shopping-cart-state.service';
import { ShoppingCart } from './../../../../_classes/shopping-cart';
import { Subscription } from 'rxjs/Subscription';

@Component({
	selector: 'app-checkout-shipping-methods',
	templateUrl: './checkout-shipping-methods.component.html',
	styleUrls: ['./checkout-shipping-methods.component.scss']
})
export class CheckoutShippingMethodsComponent implements OnInit, OnDestroy {

	constructor(private shoppingCartStateService: ShoppingCartStateService) { }

	public shoppingCart: ShoppingCart;
	private shoppingCartSubscription: Subscription;

	ngOnInit() {
		this.shoppingCartSubscription = this.loadShoppingCart();
	}

	loadShoppingCart(): Subscription {
		return this.shoppingCartStateService.getState()
			.subscribe((currentShoppingCart: ShoppingCart) => this.shoppingCart = currentShoppingCart);
	}

	onSubmit(form) {
	}

	ngOnDestroy() {
		this.shoppingCartSubscription.unsubscribe();
	}

}
