import { Component, OnInit, Input } from '@angular/core';
import { ShoppingCartModalService } from './../../../../_services/shopping-cart-modal.service';

@Component({
  selector: 'app-shopping-cart-modal',
  templateUrl: './shopping-cart-modal.component.html',
  styleUrls: ['./shopping-cart-modal.component.scss']
})
export class ShoppingCartModalComponent implements OnInit {

  constructor(private shoppingCartModalService: ShoppingCartModalService) { }


  ngOnInit() {
  }

  @Input() products;

  setModalInactive(event) {
	  console.log(event.target.className)
	// if (event.target.className === 'modal__content__close' || event.target.className === 'modal') {
	// 	this.isModalActive = false;
	// 	this.shareDataService.updateModalActivity(false);
	// 	document.body.className = 'overflow-visible';
	// }
}

  
}
