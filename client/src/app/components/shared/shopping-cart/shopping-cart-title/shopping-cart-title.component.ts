import { Component, OnInit, Input } from '@angular/core';
import { Cart } from './../../../../_interfaces/cart';

@Component({
  selector: 'app-shopping-cart-title',
  templateUrl: './shopping-cart-title.component.html',
  styleUrls: ['./shopping-cart-title.component.scss']
})
export class ShoppingCartTitleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() totalQuantity: Cart["quantity"];
}
