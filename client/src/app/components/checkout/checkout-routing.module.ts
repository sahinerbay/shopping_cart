import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CheckoutComponent } from './checkout.component';
import { CheckoutCartComponent} from './checkout-cart/checkout-cart.component';
import { CheckoutShippingAddressComponent } from './checkout-shipping-address/checkout-shipping-address.component'
import { CheckoutShippingMethodsComponent } from './checkout-shipping-methods/checkout-shipping-methods.component';
import { CheckoutPaymentComponent } from './checkout-payment/checkout-payment.component';

const checkoutRoutes: Routes = [
	{
		path: 'checkout', component: CheckoutComponent ,
		children: [
			{ path: '',  component: CheckoutCartComponent, data: { state: 'checkout' }},
			{ path: 'shipping-address', component: CheckoutShippingAddressComponent, data: { state: 'shipping' }},
			{ path: 'shipping-methods', component: CheckoutShippingMethodsComponent, data: { state: 'methods' }},		
			{ path: 'payment', component: CheckoutPaymentComponent, data: { state: 'payment' }}
		]
	}
];

@NgModule({
	imports: [
		RouterModule.forChild(checkoutRoutes)
	],
	exports: [
		RouterModule
	]
})

export class CheckoutRoutingModule { }