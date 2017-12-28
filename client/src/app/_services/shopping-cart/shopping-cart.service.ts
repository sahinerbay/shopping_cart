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
	private shoppingCart: ShoppingCart;

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
			ShoppingCart.increaseQuantity(shoppingCart.items, cart._id);
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

	public increaseItem(product_id: Cart["_id"]) {
		let shoppingCart = this.load();
		ShoppingCart.increaseQuantity(shoppingCart.items, product_id);
		this.save(shoppingCart);
	}

	public decreaseItem(product_id: Cart["_id"]) {
		let shoppingCart = this.load();
		ShoppingCart.decreaseQuantity(shoppingCart.items, product_id);
		this.save(shoppingCart);
	}

	public save(shoppingCart: ShoppingCart) {
		shoppingCart.totalPrice = ShoppingCart.calculateTotalPrice(shoppingCart);
		shoppingCart.totalQuantity = ShoppingCart.calculateTotalQuantity(shoppingCart);

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

	public emptyCart() {
		this.storage.clear();
	}

}