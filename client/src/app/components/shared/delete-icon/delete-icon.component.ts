import { Component, OnInit, Input } from '@angular/core';
import { ShoppingCartService } from './../../../_services/shopping-cart.service';

@Component({
  selector: 'app-delete-icon',
  templateUrl: './delete-icon.component.html',
  styleUrls: ['./delete-icon.component.scss']
})
export class DeleteIconComponent implements OnInit {

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
  }

  @Input() productId;

  removeProduct(productId) {
	this.shoppingCartService.removeItem(productId);
	console.log(productId)
  }

}
