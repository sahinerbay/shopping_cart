import { Component, Input } from '@angular/core';
import { Cart } from './../../../../_interfaces/cart';

@Component({
  selector: 'app-product-total-quantity',
  templateUrl: './product-total-quantity.component.html',
  styleUrls: ['./product-total-quantity.component.scss']
})
export class ProductTotalQuantityComponent  {

  @Input() productTotalQuantity:Cart["quantity"];

}