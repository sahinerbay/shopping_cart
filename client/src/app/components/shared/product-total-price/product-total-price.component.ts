import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-total-price',
  templateUrl: './product-total-price.component.html',
  styleUrls: ['./product-total-price.component.scss']
})
export class ProductTotalPriceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() productTotalPrice;

}
