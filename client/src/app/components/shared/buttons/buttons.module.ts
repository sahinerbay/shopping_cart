import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AddButtonComponent } from './add-button/add-button.component';
import { RemoveButtonComponent } from './remove-button/remove-button.component';
import { CheckoutButtonComponent } from './checkout-button/checkout-button.component';
import { QuantityButtonComponent } from './quantity-button/quantity-button.component';
import { CompleteButtonComponent } from './complete-button/complete-button.component';
import { NextButtonComponent } from './next-button/next-button.component';
import { PreviousButtonComponent } from './previous-button/previous-button.component';

@NgModule({
	imports: [
		CommonModule,
		RouterModule
	],
	declarations: [
		NextButtonComponent,
		PreviousButtonComponent,
		AddButtonComponent,
		RemoveButtonComponent,
		CheckoutButtonComponent,
		QuantityButtonComponent,
		CompleteButtonComponent
	],
	exports: [
		NextButtonComponent,
		PreviousButtonComponent,
		AddButtonComponent,
		RemoveButtonComponent,
		CheckoutButtonComponent,
		QuantityButtonComponent,
		CompleteButtonComponent
	]
})
export class ButtonsModule { }
