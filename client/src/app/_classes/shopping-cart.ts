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

	/* Returns the value of the first element or undefined */
	static findItem(items: Cart[], productId) {
		return items.find((product) => product._id === productId);
	}

	static isEmpty(obj: ShoppingCart): boolean {
		return Object.keys(obj).length === 0 && obj.constructor === Object
	}

	static increaseQuantity(items: Cart[], productId):void {
		for (let product of items) {
			if (product._id === productId) {
				product.quantity ++;
			} 
		}
	}

	static decreaseQuantity(items: Cart[], productId):void {
		for (let product of items) {
			if (product._id === productId && product.quantity !== 1) {
				product.quantity --;
			} 
		}
	}

	static calculateTotalPrice(shoppingCart: ShoppingCart) {
		return shoppingCart.items
			.map((item: Cart) => item.quantity * shoppingCart.items.find((product) => product._id === item._id).unitPrice)
			.reduce((previous, current) => previous + current, 0)
	}

	static calculateTotalQuantity(shoppingCart: ShoppingCart) {
		return shoppingCart.items
			.map((item: Cart) => item.quantity)
			.reduce((previous, current) => previous + current, 0)
	}

}
