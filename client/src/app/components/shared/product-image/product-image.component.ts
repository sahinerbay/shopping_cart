import { Component, Input } from '@angular/core';
import { Cart } from './../../../_interfaces/cart';

@Component({
  selector: 'app-product-image',
  templateUrl: './product-image.component.html',
  styleUrls: ['./product-image.component.scss']
})
export class ProductImageComponent {

  @Input() imagePath: Cart["imagePath"];

}