import { Component } from '@angular/core';
import { ShoppingCartService } from './../../../../_services/shopping-cart/shopping-cart.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-complete-button',
	templateUrl: './complete-button.component.html',
	styleUrls: ['./complete-button.component.scss']
})
export class CompleteButtonComponent {

	constructor(private shoppingCartService: ShoppingCartService, private router : Router) { }

	private isLoading: boolean = false;

	onComplete() {
		this.isLoading = true;
		setTimeout(() => {
			this.isLoading = false;
			this.router.navigate(['/']);
			this.shoppingCartService.emptyCart();
		}, 5000)
	}

}
