import { Component, Input } from '@angular/core';
import { Cart } from './../../../_interfaces/cart';

@Component({
	selector: 'app-product-title',
	templateUrl: './product-title.component.html',
	styleUrls: ['./product-title.component.scss']
})
export class ProductTitleComponent {

	@Input() productTitle: Cart["title"];

}