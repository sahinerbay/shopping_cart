import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductsHttpService } from './../../_services/products-http.service';
import { ApiResponse } from './../../_interfaces/api-response';
import { Cart } from './../../_interfaces/cart';
import { Subscription } from 'rxjs/Subscription';

@Component({
	selector: 'app-products-list',
	templateUrl: './products-list.component.html',
	styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit, OnDestroy {

	constructor(private productsHttpService: ProductsHttpService) { }

	private productsSubscription: Subscription;
	public products: Array<Cart>;

	ngOnInit() {
		this.productsSubscription = this.fetchProducts();
	}

	fetchProducts(): Subscription {
		return this.productsHttpService.getProducts().subscribe((response: ApiResponse) => {
			this.products = response.data;
		})
	}

	ngOnDestroy() {
		this.productsSubscription.unsubscribe();
	}

}