import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { ShoppingCart } from './../../_classes/shopping-cart';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { ShoppingCartService } from './shopping-cart.service';

@Injectable()
export class ShoppingCartStateService {

	private currentStateShoppingCart = new ReplaySubject<ShoppingCart>();

	getState(): Observable<any> {
		return this.currentStateShoppingCart.asObservable();
	}

	setState(shoppingCart: ShoppingCart):void {
		this.currentStateShoppingCart.next(shoppingCart);
	}
}
