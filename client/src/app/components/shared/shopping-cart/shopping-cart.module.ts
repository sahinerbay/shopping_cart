import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PipesModule } from '@app/_pipes/pipes.module';
import { DirectivesModule } from '@app/_directives';
import { ProductModule } from './../product/product.module';
import { ButtonsModule } from './../buttons/buttons.module';

import { ShoppingCartEmptyComponent } from './shopping-cart-empty/shopping-cart-empty.component';
import { ShoppingCartTitleComponent } from './shopping-cart-title/shopping-cart-title.component';
import { ShoppingCartTotalPriceComponent } from './shopping-cart-total-price/shopping-cart-total-price.component';
import { ShoppingCartStepsComponent } from './shopping-cart-steps/shopping-cart-steps.component';
import { ShoppingCartItemsComponent } from './shopping-cart-items/shopping-cart-items.component';
import { ShoppingCartModalComponent } from './shopping-cart-modal/shopping-cart-modal.component';


@NgModule({
	imports: [
		CommonModule,
		RouterModule,
		ProductModule,
		ButtonsModule,
		PipesModule,
		DirectivesModule
	],
	declarations: [
		ShoppingCartEmptyComponent,
		ShoppingCartTitleComponent,
		ShoppingCartTotalPriceComponent,
		ShoppingCartStepsComponent,
		ShoppingCartItemsComponent,
		ShoppingCartModalComponent
	],
	exports: [
		ShoppingCartEmptyComponent,
		ShoppingCartTitleComponent,
		ShoppingCartTotalPriceComponent,
		ShoppingCartStepsComponent,
		ShoppingCartItemsComponent,
		ShoppingCartModalComponent
	]
})
export class ShoppingCartModule { }
