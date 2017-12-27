import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-total-quantity',
  templateUrl: './product-total-quantity.component.html',
  styleUrls: ['./product-total-quantity.component.scss']
})
export class ProductTotalQuantityComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() productTotalQuantity;

}
