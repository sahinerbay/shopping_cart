import { Component } from '@angular/core';
import { ShoppingCartService } from './../../../../_services/shopping-cart/shopping-cart.service';
import { Router } from '@angular/router';
import { LoadingModalService } from './../../../../_services/loading-modal.service';

@Component({
	selector: 'app-complete-button',
	templateUrl: './complete-button.component.html',
	styleUrls: ['./complete-button.component.scss']
})
export class CompleteButtonComponent {

	constructor(private shoppingCartService: ShoppingCartService, private router: Router, private loadingModalService:LoadingModalService) { }

	onComplete() {
		this.loadingModalService.setLoading(true);
		setTimeout(() => {
			this.loadingModalService.setLoading(false);
			this.router.navigate(['/']);
			this.shoppingCartService.emptyCart();
		}, 3000)
	}

}
