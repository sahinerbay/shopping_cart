import { Cart } from './../_interfaces/cart';

export class ShoppingCart {

	public items: Cart[] = [];
	public totalPrice: number = 0;
	public totalQuantity: number = 0;

	update(source: ShoppingCart) {
		this.items = source.items;
		this.totalPrice = source.totalPrice;
		this.totalQuantity = source.totalQuantity
	}

	static findItem(items: Cart[], productId) {
		return items.find((product) => product.product_id === productId);
	}

	static updateItemQuantity(items: Cart[], productId) {
		for (let product of items) {
			if (product.product_id === productId) {
				product.quantity ++;
			}
		}
	}

	static isEmpty(obj: ShoppingCart): boolean {
		return Object.keys(obj).length === 0 && obj.constructor === Object
	}
}
