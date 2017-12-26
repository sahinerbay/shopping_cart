import { Component, OnInit, ElementRef } from '@angular/core';
import { ShoppingCartService } from './../../../_services/shopping-cart.service';
import { ShoppingCartModalService } from './../../../_services/shopping-cart-modal.service';
import { ShoppingCart } from './../../../_classes/shopping-cart';
import { Observable } from "rxjs/Observable";

@Component({
	selector: 'app-shopping-cart',
	templateUrl: './shopping-cart.component.html',
	styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

	constructor(private shoppingCartService: ShoppingCartService, private shoppingCartModalService: ShoppingCartModalService, private elementRef: ElementRef) { }

	private shoppingCart: ShoppingCart;
	private isModalActive: boolean = false;

	ngOnInit() {
		this.fetchShoppingCart();
		this.shoppingCartModalService.getModalActivity().subscribe((res) => this.isModalActive = res);
	}

	fetchShoppingCart(): void {
		this.shoppingCartService.getState()
			.subscribe((shoppingCart: ShoppingCart) => {
				this.shoppingCart = shoppingCart;
				console.log('hello')
			});
	}

	setModalActive(): void {
			this.shoppingCartModalService.setModalInactive();

	}

	emptyCart() {
		this.shoppingCartService.emptyCart();
		this.isModalActive = false;
	}

}
