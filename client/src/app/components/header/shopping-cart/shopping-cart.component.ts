import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from './../../../_services/shopping-cart.service';
import { ShoppingCart } from './../../../_classes/shopping-cart';
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  constructor(private shoppingCartService: ShoppingCartService) { }

  private shoppingCart: ShoppingCart;
  private isModalActive: boolean = false;
  
  ngOnInit() {
    this.fetchShoppingCart();
  }

  fetchShoppingCart():void {
    this.shoppingCartService.getState()
      .subscribe((shoppingCart: ShoppingCart) => {
        this.shoppingCart = shoppingCart;
        console.log('hello')
      });
  }

  setModalActive():void {
    this.isModalActive = true;
  }

  emptyCart() {
    this.shoppingCartService.emptyCart()
  }

}
