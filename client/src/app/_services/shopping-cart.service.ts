import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Cart } from './../_interfaces/cart';
import { ShoppingCart } from './../_classes/shopping-cart';
import { StorageService } from './storage.service';
import { environment } from './../../environments/environment';
import { ReplaySubject } from 'rxjs/ReplaySubject';

@Injectable()
export class ShoppingCartService {

	private storage: Storage;

	private currentStateShoppingCart = new ReplaySubject<ShoppingCart>();

	getState(): Observable<any> {
		this.currentStateShoppingCart.next(this.load())
		return this.currentStateShoppingCart.asObservable();
	}

	constructor(private storageService: StorageService) {
		this.storage = this.storageService.get();
	}

	public addItem(cart: Cart) {
		let shoppingCart = this.load();

		let isEmpty = ShoppingCart.isEmpty(shoppingCart);
		let isProductFound = ShoppingCart.findItem(shoppingCart.items, cart.product_id);

		if (isEmpty || !isProductFound) {
			let item: Cart = {
				product_id: cart.product_id,
				title: cart.title,
				imagePath: cart.imagePath,
				unitPrice: cart.unitPrice,
				quantity: 1
			}
			shoppingCart.items.push(item);
		} else {
			ShoppingCart.updateItemQuantity(shoppingCart.items, cart.product_id);
		}

	
		this.save(shoppingCart);
	}

	public removeItem(product_id: Cart["product_id"]) {
		let shoppingCart = this.load();
		let newShoppingCart = shoppingCart.items.filter(product => product.product_id !== product_id);
	
		this.save(Object.assign({}, shoppingCart, {
			items: newShoppingCart
		}));

	}

	public save(shoppingCart: ShoppingCart) {
		shoppingCart.totalPrice = this.calculateTotalPrice(shoppingCart);
		shoppingCart.totalQuantity = this.calculateTotalQuantity(shoppingCart);

		this.currentStateShoppingCart.next(shoppingCart);
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
			.map((item: Cart) => item.quantity * shoppingCart.items.find((p) => p.product_id === item.product_id).unitPrice)
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
