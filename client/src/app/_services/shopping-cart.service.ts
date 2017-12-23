import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Product } from './../_interfaces/products';
import { Cart } from './../_interfaces/cart';
import { ShoppingCart } from './../_classes/shopping-cart';
import { StorageService } from './storage.service';
import { environment } from './../../environments/environment';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ShoppingCartService {

	private storage: Storage;

	private currentStateShoppingCart = new Subject();

	getState(): Observable<any> {
		return this.currentStateShoppingCart.asObservable();
	}

	constructor(private storageService: StorageService) {
		this.storage = this.storageService.get();
	}

	public addItem(cart: Cart) {
		let shoppingCart = this.load();

		for (let product of shoppingCart.items) {
			if (product.product_id === cart.product_id) {
				product.price = cart.price;
				product.quantity += cart.quantity;

				shoppingCart.totalPrice = this.calculateTotal(shoppingCart);
				this.save(shoppingCart);
				return;
			}
		}
		shoppingCart.totalPrice = this.calculateTotal(shoppingCart);
		shoppingCart.items.push(cart);
		this.save(shoppingCart);
	}

	public removeItem(product_id: Cart["product_id"]) {
		let shoppingCart = this.load();

		shoppingCart.items.filter(product => product.product_id !== product_id)

		this.save(shoppingCart);

	}

	public save(shoppingCart: ShoppingCart) {
		this.currentStateShoppingCart.next(shoppingCart);
		this.storage.setItem(environment.LOCAL_STORAGE_KEY, JSON.stringify(shoppingCart));
	}

	public load(): ShoppingCart {
		let shoppingCartObject = JSON.parse(localStorage.getItem(environment.LOCAL_STORAGE_KEY));
		if (shoppingCartObject === null) {
			return new ShoppingCart([], 0);
		}
		return new ShoppingCart(shoppingCartObject.items, shoppingCartObject.totalPrice);
	}

	public calculateTotal(shoppingCart: ShoppingCart) {
		return shoppingCart.items
			.map((item: Cart) => item.quantity * shoppingCart.items.find((p) => p.product_id === item.product_id).price)
			.reduce((previous, current) => previous + current, 0)
	}

	public emptyCart() {
		this.storage.clear();
	}

}
