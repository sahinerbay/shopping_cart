import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ShoppingCartService } from './../../../_services/shopping-cart/shopping-cart.service';
import { ShoppingCartModalService } from './../../../_services/shopping-cart/shopping-cart-modal.service';
import { ShoppingCartStateService } from './../../../_services/shopping-cart/shopping-cart-state.service';
import { ShoppingCart } from './../../../_classes/shopping-cart';
import { Observable } from 'rxjs/Rx';
import { Subscription } from 'rxjs/Subscription';

@Component({
	selector: 'app-shopping-cart',
	templateUrl: './shopping-cart.component.html',
	styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit, OnDestroy {

	constructor(
		private shoppingCartService: ShoppingCartService, 
		private shoppingCartModalService: ShoppingCartModalService, 
		private shoppingCartStateService: ShoppingCartStateService, 
		private route: ActivatedRoute,
		private router: Router, 
	) { }

	private modalSubsciption: Subscription;
	private shoppingCartSubscription: Subscription;

	private shoppingCart: ShoppingCart;
	private isModalActive: boolean = false;

	ngOnInit() {
		this.fetchShoppingCart();
		this.getModalActivity();
		this.route.url.subscribe((res)=> console.log(res))
		console.log(this.router.url)
	}

	fetchShoppingCart(): Subscription {
		return this.shoppingCartStateService.getState()
			.subscribe((shoppingCart: ShoppingCart) => {
				this.shoppingCart = shoppingCart;
			});
	}

	setModalActive(): void {
		this.shoppingCartModalService.setModalActive();
	}

	getModalActivity(): Subscription {
		return this.shoppingCartModalService.getModalActivity().subscribe((active: boolean) => this.isModalActive = active);
	}

	ngOnDestroy() {
		this.modalSubsciption.unsubscribe();
		this.shoppingCartSubscription.unsubscribe();
	}
}
