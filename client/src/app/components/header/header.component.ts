import { Component, OnInit, OnDestroy, DoCheck } from '@angular/core';
import { ShoppingCartService } from '@app/_services';
import { ShoppingCartModalService } from '@app/_services';
import { ShoppingCartStateService } from '@app/_services';
import { ShoppingCart } from '@app/_classes';
import { Observable } from 'rxjs/Rx';
import { Subscription } from 'rxjs/Subscription';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit, OnDestroy, DoCheck {

	constructor(
		private shoppingCartService: ShoppingCartService,
		private shoppingCartModalService: ShoppingCartModalService,
		private shoppingCartStateService: ShoppingCartStateService,
		private router: Router, private route: ActivatedRoute, private location: Location
	) { }

	private modalSubsciption: Subscription;
	private shoppingCartSubscription: Subscription;

	public shoppingCart: ShoppingCart;
	private isModalActive: boolean = false;
	public isHomePageOn: boolean = true;

	ngOnInit() {
		this.shoppingCartSubscription = this.fetchShoppingCart();
		this.modalSubsciption = this.getModalActivity();
	}

	ngDoCheck() {
		if (this.location.isCurrentPathEqualTo('/') !== true) {
			this.isHomePageOn = false;
		} else {
			this.isHomePageOn = true;
		}
	}

	fetchShoppingCart(): Subscription {
		return this.shoppingCartStateService.getState()
			.subscribe((shoppingCart: ShoppingCart) => {
				this.shoppingCart = shoppingCart;
			});
	}

	toggleModal(): void {
		this.shoppingCartModalService.toggleModal();
	}

	getModalActivity(): Subscription {
		return this.shoppingCartModalService.getModalActivity().subscribe((active: boolean) => this.isModalActive = active);
	}

	ngOnDestroy() {
		this.modalSubsciption.add(this.modalSubsciption).unsubscribe();
	}
}