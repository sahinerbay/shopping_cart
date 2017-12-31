import { Component, OnInit, OnDestroy } from '@angular/core';
import { ShoppingCartStateService } from './../../../../_services/shopping-cart/shopping-cart-state.service';
import { ShoppingCart } from './../../../../_classes/shopping-cart';
import { Subscription } from 'rxjs/Subscription';

@Component({
	selector: 'app-shipping',
	templateUrl: './shipping.component.html',
	styleUrls: ['./shipping.component.scss']
})
export class ShippingComponent implements OnInit, OnDestroy {

	constructor(private shoppingCartStateService: ShoppingCartStateService) { }

	private shoppingCart: ShoppingCart;
	private shoppingCartSubscription: Subscription;

	ngOnInit() {
		this.shoppingCartSubscription = this.loadShoppingCart();
	}

	loadShoppingCart(): Subscription {
		return this.shoppingCartStateService.getState()
			.subscribe((currentShoppingCart: ShoppingCart) => this.shoppingCart = currentShoppingCart);
	}

	onSubmit(form) {
		console.log(form)
	}

	ngOnDestroy() {
		this.shoppingCartSubscription.unsubscribe();
	}

}
