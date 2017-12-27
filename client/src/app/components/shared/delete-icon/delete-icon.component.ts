import { Component, Input } from '@angular/core';
import { ShoppingCartService } from './../../../_services/shopping-cart/shopping-cart.service';
import { Cart } from './../../../_interfaces/cart';

@Component({
	selector: 'app-delete-icon',
	templateUrl: './delete-icon.component.html',
	styleUrls: ['./delete-icon.component.scss']
})
export class DeleteIconComponent {

	constructor(private shoppingCartService: ShoppingCartService) { }

	@Input() productId: Cart["_id"];

	removeProduct(productId: Cart["_id"]): void {
		this.shoppingCartService.removeItem(productId);
	}

}