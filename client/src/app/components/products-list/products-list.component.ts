import { Component, OnInit } from '@angular/core';
import { ProductsHttpService } from './../../_services/products-http.service';
import { ApiResponse } from './../../_interfaces/api-response';
import { Cart } from './../../_interfaces/cart';

@Component({
	selector: 'app-products-list',
	templateUrl: './products-list.component.html',
	styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

	constructor(private productsHttpService: ProductsHttpService) { }

	private products: Array<Cart>;

	ngOnInit() {
		this.fetchProducts();
	}

	fetchProducts():void {
		this.productsHttpService.getProducts().subscribe((response: ApiResponse) => {
			this.products = response.data;
		})
	}

}
