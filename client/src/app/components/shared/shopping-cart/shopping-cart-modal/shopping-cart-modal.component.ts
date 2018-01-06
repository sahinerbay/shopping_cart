import { Component, Input, OnInit } from '@angular/core';
import { ShoppingCartModalService } from '@app/_services';
import { SlideToggleAnimation } from '@app/_animations';
import { ShoppingCart } from '@app/_classes';

@Component({
	selector: 'app-shopping-cart-modal',
	templateUrl: './shopping-cart-modal.component.html',
	styleUrls: ['./shopping-cart-modal.component.scss'],
	animations: [SlideToggleAnimation],
	host: { '[@slideState]': '' }
})
export class ShoppingCartModalComponent implements OnInit {

	constructor(private shoppingCartModalService: ShoppingCartModalService) { }

	public isModalActive: boolean = false;

	ngOnInit() {
		this.shoppingCartModalService.getModalActivity()
			.subscribe((activity:boolean)=> {
				this.isModalActive = activity;
			});

	}

	@Input() products: ShoppingCart;

	isShoppingCartEmpty(products): boolean {
		if (products.items.length !== 0) {
			return true;
		}
		return false;
	}

}
