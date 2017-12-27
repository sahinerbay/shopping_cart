import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Cart } from './../../_interfaces/cart';
import { ShoppingCart } from './../../_classes/shopping-cart';
import { StorageService } from './../storage.service';
import { environment } from './../../../environments/environment';
import { ShoppingCartStateService } from './shopping-cart-state.service';
import { ReplaySubject } from 'rxjs/ReplaySubject';

@Injectable()
export class ShoppingCartService {

	private storage: Storage;

	constructor(private storageService: StorageService, private shoppingCartStateService: ShoppingCartStateService) {
		this.storage = this.storageService.get();
		this.shoppingCartStateService.setState(this.load());
	}

	public addItem(cart: Cart) {

		/* Retrieve ShoppingCart Object */
		let shoppingCart = this.load();

		/* Check Whether Shopping Cart Empty or Product is Not Added to Shopping Cart */ 
		let isEmpty = ShoppingCart.isEmpty(shoppingCart);
		let isProductFound = ShoppingCart.findItem(shoppingCart.items, cart._id);

		/* When Shopping Cart Empty or Product is Not Added to Shopping Cart*/
		if (isEmpty || !isProductFound) {
			let item: Cart = {
				_id: cart._id,
				title: cart.title,
				imagePath: cart.imagePath,
				unitPrice: cart.unitPrice,
				quantity: 1
			}
			shoppingCart.items.push(item);
		} 
		/* When Product is Already in the Shopping Basket */
		else {
			ShoppingCart.updateItemQuantity(shoppingCart.items, cart._id);
		}

		/* Save ShoppingCart Object */
		this.save(shoppingCart);
	}

	public removeItem(product_id: Cart["_id"]) {
		let shoppingCart = this.load();
		let newShoppingCart = shoppingCart.items.filter((product: Cart) => product._id !== product_id);

		this.save(Object.assign({}, shoppingCart, {
			items: newShoppingCart
		}));

	}

	public save(shoppingCart: ShoppingCart) {
		shoppingCart.totalPrice = this.calculateTotalPrice(shoppingCart);
		shoppingCart.totalQuantity = this.calculateTotalQuantity(shoppingCart);

		this.shoppingCartStateService.setState(shoppingCart);
		this.storage.setItem(environment.LOCAL_STORAGE_KEY, JSON.stringify(shoppingCart));
	}

	public load(): ShoppingCart {
		let shoppingCart = new ShoppingCart();

		let shoppingCartObject = JSON.parse(localStorage.getItem(environment.LOCAL_STORAGE_KEY));
		if (shoppingCartObject !== null) {
			shoppingCart.update(shoppingCartObject);
		}
		return shoppingCart;
	}

	public calculateTotalPrice(shoppingCart: ShoppingCart) {
		return shoppingCart.items
			.map((item: Cart) => item.quantity * shoppingCart.items.find((product) => product._id === item._id).unitPrice)
			.reduce((previous, current) => previous + current, 0)
	}

	public calculateTotalQuantity(shoppingCart: ShoppingCart) {
		return shoppingCart.items
			.map((item: Cart) => item.quantity)
			.reduce((previous, current) => previous + current, 0)
	}

	public emptyCart() {
		this.storage.clear();
	}

}