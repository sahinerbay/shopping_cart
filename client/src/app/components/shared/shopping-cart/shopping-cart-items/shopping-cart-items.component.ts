import { Component, OnInit, Input } from '@angular/core';
import { Cart } from './../../../../_interfaces/cart';

@Component({
  selector: 'app-shopping-cart-items',
  templateUrl: './shopping-cart-items.component.html',
  styleUrls: ['./shopping-cart-items.component.scss']
})
export class ShoppingCartItemsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() productsItems: Cart;

}
