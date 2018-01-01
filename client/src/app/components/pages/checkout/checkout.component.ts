import { Component, OnInit, OnDestroy } from '@angular/core';
import { ShoppingCartStateService } from './../../../_services/shopping-cart/shopping-cart-state.service';
import { ShoppingCart } from './../../../_classes/shopping-cart';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ItemsPipe } from './../../../_pipes/items.pipe';

@Component({
	selector: 'app-checkout',
	templateUrl: './checkout.component.html',
	styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit, OnDestroy {

	constructor(private shoppingCartStateService: ShoppingCartStateService, private router: Router, private route: ActivatedRoute, private itemsPipe: ItemsPipe) {}

	private shoppingCart: ShoppingCart;
	private shoppingCartSubscription: Subscription;

	ngOnInit() {
		this.shoppingCartSubscription = this.loadShoppingCart();
	
	}

	loadShoppingCart(): Subscription {
		return this.shoppingCartStateService.getState()
			.subscribe((shoppingCart: ShoppingCart) => this.shoppingCart = shoppingCart);
	}

	isShoppingCartEmpty(shoppingCart: ShoppingCart): boolean {
		if (shoppingCart.items.length !== 0) {
			return true;
		}
		return false;
	}

	showQuantity(cart:ShoppingCart) {
		return this.itemsPipe.transform(cart.totalQuantity)
	}

	ngOnDestroy() {
		this.shoppingCartSubscription.unsubscribe();
	}

}