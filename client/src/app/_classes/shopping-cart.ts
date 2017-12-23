import { Cart } from './../_interfaces/cart';

export class ShoppingCart {

	constructor(public items: Cart[], public totalPrice: number) { }

	update(source: ShoppingCart) {
		this.items = source.items;
		this.totalPrice = source.totalPrice;
		 
	}
}
