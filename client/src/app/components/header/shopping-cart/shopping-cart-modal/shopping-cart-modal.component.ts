import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-shopping-cart-modal',
  templateUrl: './shopping-cart-modal.component.html',
  styleUrls: ['./shopping-cart-modal.component.scss']
})
export class ShoppingCartModalComponent implements OnInit {

  constructor() { }


  ngOnInit() {
  }

  @Input() products;

  
}
