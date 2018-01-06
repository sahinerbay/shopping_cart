import { Component, OnInit, OnDestroy } from '@angular/core';
import { ShoppingCartStateService } from '@app/_services';
import { ShoppingCart } from '@app/_classes';
import { Subscription } from 'rxjs/Subscription';
import { LoadingModalService } from '@app/_services';

@Component({
	selector: 'app-checkout-payment',
	templateUrl: './checkout-payment.component.html',
	styleUrls: ['./checkout-payment.component.scss']
})

export class CheckoutPaymentComponent implements OnInit, OnDestroy {

	constructor(private shoppingCartStateService: ShoppingCartStateService, private loadingModalService: LoadingModalService) { }

	private shoppingCart: ShoppingCart;
	private shoppingCartSubscription: Subscription;

	public isLoading: boolean = false;
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
		//will be developed later...
	}

	ngOnDestroy() {
		this.shoppingCartSubscription.add(this.isLoadingSubscription).unsubscribe();
	}

}
