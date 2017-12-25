import { Component, OnInit, Input  } from '@angular/core';
import { Cart } from './../../../_interfaces/cart';

@Component({
	selector: 'app-product',
	templateUrl: './product.component.html',
	styleUrls: ['./product.component.scss'],
	host: { 'class': 'product product-center' }
})
export class ProductComponent implements OnInit {

	constructor() { }

	@Input() product: Cart;

	ngOnInit() {
	}

}
