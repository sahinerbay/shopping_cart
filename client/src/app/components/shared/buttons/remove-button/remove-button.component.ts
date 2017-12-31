import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ShoppingCartService } from './../../../../_services/shopping-cart/shopping-cart.service';
import { Cart } from './../../../../_interfaces/cart';

@Component({
	selector: 'app-remove-button',
	templateUrl: './remove-button.component.html',
	styleUrls: ['./remove-button.component.scss']
 })
export class RemoveButtonComponent {

	constructor(private shoppingCartService: ShoppingCartService) { }

	@Input() productId: Cart["_id"];
	@Output() isRemoved = new EventEmitter<boolean>();

	removeProduct(productId: Cart["_id"]): void {
		this.isRemoved.emit(true);
		this.shoppingCartService.removeItem(productId);
	}

}