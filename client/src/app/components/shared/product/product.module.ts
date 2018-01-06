import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipesModule } from '@app/_pipes';

import { ProductImageComponent } from './product-image/product-image.component';
import { ProductPriceComponent } from './product-price/product-price.component';
import { ProductTitleComponent } from './product-title/product-title.component';
import { ProductTotalQuantityComponent } from './product-total-quantity/product-total-quantity.component';
import { ProductTotalPriceComponent } from './product-total-price/product-total-price.component';

@NgModule({
  imports: [
	 CommonModule,
	 PipesModule
  ],
  declarations: [
	ProductImageComponent,
	ProductPriceComponent,
	ProductTitleComponent,
	ProductTotalQuantityComponent,
	ProductTotalPriceComponent,
  ],
  exports: [
	ProductImageComponent,
	ProductPriceComponent,
	ProductTitleComponent,
	ProductTotalQuantityComponent,
	ProductTotalPriceComponent,
  ]
})
export class ProductModule { }
