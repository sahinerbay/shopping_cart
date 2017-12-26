import { Component, OnInit, Input } from '@angular/core';
import { Cart } from './../../../_interfaces/cart';
import { ShoppingCartService } from './../../../_services/shopping-cart.service';
import { ShoppingCartModalService } from './../../../_services/shopping-cart-modal.service';

@Component({
	selector: 'app-add-button',
	templateUrl: './add-button.component.html',
	styleUrls: ['./add-button.component.scss']
})
export class AddButtonComponent implements OnInit {

	constructor(private shoppingCartService: ShoppingCartService, private shoppingCartModalService: ShoppingCartModalService) { }

	@Input() product: Cart;

	ngOnInit() {
	}

	addItem(product, quantity) {

		let cart: Cart = {
			product_id: product._id,
			title: product.title,
			unitPrice: product.unitPrice,
			imagePath: product.imagePath,
			quantity: quantity
		}
		
		this.shoppingCartService.addItem(cart);

		this.shoppingCartModalService.setModalActive();
	}

}
