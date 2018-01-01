import { Component, OnInit, OnDestroy } from '@angular/core';
import { ShoppingCartStateService } from './../../../_services/shopping-cart/shopping-cart-state.service';
import { ShoppingCart } from './../../../_classes/shopping-cart';
import { Subscription } from 'rxjs/Subscription';
import { ItemsPipe } from './../../../_pipes/items.pipe';

@Component({
	selector: 'app-loading-modal',
	templateUrl: './loading-modal.component.html',
	styleUrls: ['./loading-modal.component.scss']
})
export class LoadingModalComponent implements OnInit, OnDestroy {

	constructor(private shoppingCartStateService: ShoppingCartStateService, private itemsPipe: ItemsPipe) { }

	private shoppingCart: ShoppingCart;
	private shoppingCartSubscription: Subscription;

	ngOnInit() {
		this.shoppingCartSubscription = this.shoppingCartStateService.getState()
			.subscribe((shoppingCart: ShoppingCart) => this.shoppingCart = shoppingCart);
	}

	cartDetails(cart: ShoppingCart) {
		let items = this.itemsPipe.transform(cart.totalQuantity, 'pipeFilter');
		return `${items} / Total: ${cart.totalPrice}`;
	}

	ngOnDestroy() {
		this.shoppingCartSubscription.unsubscribe();
	}

}
