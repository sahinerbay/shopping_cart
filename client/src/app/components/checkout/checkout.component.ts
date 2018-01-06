import { Component } from '@angular/core';
import { routerTransition } from '@app/_animations/router.animation';
import { Router } from '@angular/router';

@Component({
	selector: 'app-checkout',
	templateUrl: './checkout.component.html',
	styleUrls: ['./checkout.component.scss'],
	animations: [ routerTransition ]
})
export class CheckoutComponent {

	constructor(private router: Router) { }

	getState(outlet) {
		return outlet.activatedRouteData.state;
	}


}