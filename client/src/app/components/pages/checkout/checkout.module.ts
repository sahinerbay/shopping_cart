import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutRoutingModule } from './checkout-routing.module';
import { SharedModule } from '@app/components/shared/shared.module';

import { CheckoutComponent } from './checkout.component';
import { CheckoutShippingAddressComponent } from './checkout-shipping-address/checkout-shipping-address.component';
import { CheckoutShippingMethodsComponent } from './checkout-shipping-methods/checkout-shipping-methods.component';
import { CheckoutPaymentComponent } from './checkout-payment/checkout-payment.component';
import { CheckoutCartComponent } from './checkout-cart/checkout-cart.component';


@NgModule({
	imports: [
		CommonModule,
		SharedModule,
		CheckoutRoutingModule,
	],
	declarations: [
		CheckoutComponent,
		CheckoutShippingAddressComponent,
		CheckoutShippingMethodsComponent,
		CheckoutPaymentComponent,
		CheckoutCartComponent
	],
	exports: [
		CheckoutComponent,
		CheckoutShippingAddressComponent,
		CheckoutShippingMethodsComponent,
		CheckoutPaymentComponent,
		CheckoutCartComponent
	]
})
export class CheckoutModule { }
