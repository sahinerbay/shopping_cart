import { Component, OnInit } from '@angular/core';
import { ProductsHttpService } from './../../_services/products-http.service';
import { ApiResponse } from './../../_interfaces/api-response';
import { Products } from './../../_interfaces/products';

@Component({
	selector: 'app-products-list',
	templateUrl: './products-list.component.html',
	styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

	constructor(private productsHttpService: ProductsHttpService) { }

	private products: Array<Products>;

	ngOnInit() {
		this.productsHttpService.getProducts().subscribe((response: ApiResponse) => {
			this.products = response.data;
		})
	}

}
