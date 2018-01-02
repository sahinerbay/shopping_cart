import { Component, OnInit, OnDestroy, DoCheck  } from '@angular/core';
import { ShoppingCartService } from './../../../_services/shopping-cart/shopping-cart.service';
import { ShoppingCartModalService } from './../../../_services/shopping-cart/shopping-cart-modal.service';
import { ShoppingCartStateService } from './../../../_services/shopping-cart/shopping-cart-state.service';
import { ShoppingCart } from './../../../_classes/shopping-cart';
import { Observable } from 'rxjs/Rx';
import { Subscription } from 'rxjs/Subscription';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

@Component({
	selector: 'app-shopping-cart',
	templateUrl: './shopping-cart.component.html',
	styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit, OnDestroy, DoCheck {

	constructor(
		private shoppingCartService: ShoppingCartService, 
		private shoppingCartModalService: ShoppingCartModalService, 
		private shoppingCartStateService: ShoppingCartStateService, 
		private router: Router, private route: ActivatedRoute, private location: Location
	) { }

	private modalSubsciption: Subscription;
	private shoppingCartSubscription: Subscription;

	public shoppingCart: ShoppingCart;
	private isModalActive: boolean = false;
	public isHomePageOn: boolean = true;

	ngOnInit() {
		this.fetchShoppingCart();
		this.getModalActivity();
	}

	ngDoCheck() {
		if(this.location.isCurrentPathEqualTo('/') !== true) {
			this.isHomePageOn = false;
		} else {
			this.isHomePageOn = true;
		}
	}

	fetchShoppingCart(): Subscription {
		return this.shoppingCartStateService.getState()
			.subscribe((shoppingCart: ShoppingCart) => {
				this.shoppingCart = shoppingCart;
			});
	}

	toggleModal(): void {
		this.shoppingCartModalService.toggleModal();
	}

	getModalActivity(): Subscription {
		return this.shoppingCartModalService.getModalActivity().subscribe((active: boolean) => this.isModalActive = active);
	}

	ngOnDestroy() {
		this.modalSubsciption.unsubscribe();
		this.shoppingCartSubscription.unsubscribe();
	}
}