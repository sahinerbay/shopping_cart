import { Component, OnInit, Input, ViewEncapsulation  } from '@angular/core';
import { Product } from './../../../_interfaces/products';

@Component({
	selector: 'app-product',
	templateUrl: './product.component.html',
	styleUrls: ['./product.component.scss'],
	encapsulation: ViewEncapsulation.None,
	host: { 'class': 'product product-center' }
})
export class ProductComponent implements OnInit {

	constructor() { }

	@Input() product: Product;

	ngOnInit() {
	}

}
