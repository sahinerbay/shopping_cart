import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from './../../../_services/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
	  this.shoppingCartService.getState()
	  	.subscribe((res) => {
			  console.log(res)
		  })
  }

}
