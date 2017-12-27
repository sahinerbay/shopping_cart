import { Component, Input } from '@angular/core';
import { Cart } from './../../../_interfaces/cart';

@Component({
  selector: 'app-product-price',
  templateUrl: './product-price.component.html',
  styleUrls: ['./product-price.component.scss']
})
export class ProductPriceComponent {

  @Input() productPrice: Cart["unitPrice"];

}