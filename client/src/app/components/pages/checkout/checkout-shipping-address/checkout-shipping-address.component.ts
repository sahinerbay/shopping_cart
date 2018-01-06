import { Component, OnInit, OnDestroy } from '@angular/core';
import { ShoppingCartStateService } from '@app/_services';
import { ShoppingCart } from '@app/_classes';
import { Subscription } from 'rxjs/Subscription';

@Component({
	selector: 'app-checkout-shipping-address',
	templateUrl: './checkout-shipping-address.component.html',
	styleUrls: ['./checkout-shipping-address.component.scss']
})
export class CheckoutShippingAddressComponent implements OnInit, OnDestroy {

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
		//will be developed later...
	}

	ngOnDestroy() {
		this.shoppingCartSubscription.unsubscribe();
	}

}
