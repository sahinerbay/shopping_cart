import { Component, OnInit, Input } from '@angular/core';
import { Cart } from './../../../../_interfaces/cart';

@Component({
  selector: 'app-shopping-cart-total-price',
  templateUrl: './shopping-cart-total-price.component.html',
  styleUrls: ['./shopping-cart-total-price.component.scss']
})
export class ShoppingCartTotalPriceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() totalPrice: Cart["totalPrice"];

}
