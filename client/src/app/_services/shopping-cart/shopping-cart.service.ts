import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Cart } from './../../_interfaces/cart';
import { ShoppingCart } from './../../_classes/shopping-cart';
import { StorageService } from './../storage.service';
import { ShoppingCartStateService } from './shopping-cart-state.service';

@Injectable()
export class ShoppingCartService {

	private storage: Storage;
	private shoppingCart: ShoppingCart;

	constructor(private storageService: StorageService, private shoppingCartStateService: ShoppingCartStateService) {
		/* Retrieve LocalStorage API */
		this.storage = this.storageService.get();
		/* Update Shopping Cart State Service */
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
		/* Retrieve ShoppingCart Object */
		let shoppingCart = this.load();

		/*Find The Product by product_id and Remove it.*/
		/*Return New Shopping Cart Object*/
		let newShoppingCart = shoppingCart.items.filter((product: Cart) => product._id !== product_id);

		/*Save Shopping Cart*/
		this.save(Object.assign({}, shoppingCart, {
			items: newShoppingCart
		}));
	}

	public increaseItem(product_id: Cart["_id"]) {
		/* Retrieve ShoppingCart Object */
		let shoppingCart = this.load();

		/*Find The Product by product_id and Mutate Shopping Cart Object*/
		ShoppingCart.increaseQuantity(shoppingCart.items, product_id);

		/*Save Shopping Cart*/
		this.save(shoppingCart);
	}

	public decreaseItem(product_id: Cart["_id"]) {
		/* Retrieve ShoppingCart Object */
		let shoppingCart = this.load();

		/*Find The Product by product_id and Mutate Shopping Cart Object*/
		ShoppingCart.decreaseQuantity(shoppingCart.items, product_id);

		/*Save Shopping Cart*/
		this.save(shoppingCart);
	}

	public save(shoppingCart: ShoppingCart) {
		/*Calculate Total Price*/
		shoppingCart.totalPrice = ShoppingCart.calculateTotalPrice(shoppingCart);

		/*Calculate Total Number Of Items In The Shopping Cart*/
		shoppingCart.totalQuantity = ShoppingCart.calculateTotalQuantity(shoppingCart);

		/*Update The State of Shopping Cart Service*/
		this.shoppingCartStateService.setState(shoppingCart);

		/*Update Local Storage*/
		this.storage.setItem('cart', JSON.stringify(shoppingCart));
	}

	public load(): ShoppingCart {
		/*Create New Shopping Cart Object */
		let shoppingCart = new ShoppingCart();

		/*Retrieve Current Shopping Cart Object From LocalStorage*/
		/*If It's Available, Then Update Newly Created Shopping Cart Object*/
		/*If It's Not Available, Then Return Newly Created Empty Shopping Cart Object*/
		let shoppingCartObject = JSON.parse(localStorage.getItem('cart'));
		if (shoppingCartObject !== null) {
			shoppingCart.update(shoppingCartObject);
		}
		return shoppingCart;
	}

	public emptyCart() {
		/*Create New Shopping Cart Object */
		let shoppingCart = new ShoppingCart();

		/*Clear Local Storage*/
		this.storage.clear();

		/*Save Shopping Cart*/
		this.save(shoppingCart)
	}
}