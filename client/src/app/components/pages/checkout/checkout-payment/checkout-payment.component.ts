import { Component, OnInit, OnDestroy } from '@angular/core';
import { ShoppingCartStateService } from './../../../../_services/shopping-cart/shopping-cart-state.service';
import { ShoppingCart } from './../../../../_classes/shopping-cart';
import { Subscription } from 'rxjs/Subscription';
import { LoadingModalService } from './../../../../_services/loading-modal.service';
@Component({
	selector: 'app-checkout-payment',
	templateUrl: './checkout-payment.component.html',
	styleUrls: ['./checkout-payment.component.scss']
})
export class CheckoutPaymentComponent implements OnInit, OnDestroy {

	constructor(private shoppingCartStateService: ShoppingCartStateService, private loadingModalService: LoadingModalService) { }

	private shoppingCart: ShoppingCart;
	private shoppingCartSubscription: Subscription;

	private isLoading: boolean = false;
	private isLoadingSubscription: Subscription;

	ngOnInit() {
		this.shoppingCartSubscription = this.loadShoppingCart();
		this.isLoadingSubscription = this.getLoadingStatus();
	}

	loadShoppingCart(): Subscription {
		return this.shoppingCartStateService.getState()
			.subscribe((currentShoppingCart: ShoppingCart) => this.shoppingCart = currentShoppingCart);
	}

	getLoadingStatus():Subscription {
		return this.loadingModalService.getLoadingStatus()
		.subscribe((status: boolean) => this.isLoading = status);
	}

	onSubmit(form) {
	}

	ngOnDestroy() {
		this.shoppingCartSubscription.unsubscribe();
		this.isLoadingSubscription.unsubscribe();
	}

}
