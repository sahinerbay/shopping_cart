import { Component, OnInit, Input } from '@angular/core';
import { Cart } from './../../../_interfaces/cart';
import { Product } from './../../../_interfaces/products';
import { ShoppingCartService } from './../../../_services/shopping-cart.service';

@Component({
	selector: 'app-add-button',
	templateUrl: './add-button.component.html',
	styleUrls: ['./add-button.component.scss']
})
export class AddButtonComponent implements OnInit {

	constructor(private shoppingCartService: ShoppingCartService) { }

	@Input() product: Product;

	ngOnInit() {
	}

	addItem(product, quantity) {

		let cart: Cart = {
			product_id: product._id,
			price: product.price,
			quantity: quantity
		}
		this.shoppingCartService.addItem(cart);
	}

}
