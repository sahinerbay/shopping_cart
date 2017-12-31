import { Component, Input, OnInit } from '@angular/core';
import { ShoppingCartModalService } from './../../../../_services/shopping-cart/shopping-cart-modal.service';
import { SlideToggleAnimation } from './../../../../_animations/slideToggle.animation';

@Component({
	selector: 'app-shopping-cart-modal',
	templateUrl: './shopping-cart-modal.component.html',
	styleUrls: ['./shopping-cart-modal.component.scss'],
	animations: [SlideToggleAnimation],
	host: { '[@slideState]': '' }
})
export class ShoppingCartModalComponent implements OnInit {

	constructor(private shoppingCartModalService: ShoppingCartModalService) { }

	private isModalActive: boolean = false;

	ngOnInit() {
		this.shoppingCartModalService.getModalActivity()
			.subscribe((activity:boolean)=> {
				this.isModalActive = activity;
			});

	}

	@Input() products;

	isShoppingCartEmpty(products): boolean {
		if (products.items.length !== 0) {
			return true;
		}
		return false;
	}

}
