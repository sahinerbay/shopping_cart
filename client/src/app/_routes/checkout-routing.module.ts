import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CheckoutComponent } from './../components/pages/checkout/checkout.component';
import { CheckoutShippingAddressComponent } from './../components/pages/checkout/checkout-shipping-address/checkout-shipping-address.component'
import { CheckoutShippingMethodsComponent } from './../components/pages/checkout/checkout-shipping-methods/checkout-shipping-methods.component';
import { CheckoutPaymentComponent } from './../components/pages/checkout/checkout-payment/checkout-payment.component';

const checkoutRoutes: Routes = [
	{
		path: 'checkout',
		children: [
			{ path: '', component: CheckoutComponent, data: { state: 'checkout' } },
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