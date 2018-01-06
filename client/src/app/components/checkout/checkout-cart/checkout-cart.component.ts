import { Component, OnInit, OnDestroy } from '@angular/core';
import { ShoppingCartStateService } from '@app/_services';
import { ShoppingCart } from '@app/_classes';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ItemsPipe } from '@app/_pipes';

@Component({
	selector: 'app-checkout-cart',
	templateUrl: './checkout-cart.component.html',
	styleUrls: ['./checkout-cart.component.scss']
 })

export class CheckoutCartComponent implements OnInit, OnDestroy {

	constructor(private shoppingCartStateService: ShoppingCartStateService, private router: Router, private route: ActivatedRoute, private itemsPipe: ItemsPipe) {}

	public shoppingCart: ShoppingCart;
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
