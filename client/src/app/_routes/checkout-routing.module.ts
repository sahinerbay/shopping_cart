import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CheckoutComponent } from './../components/pages/checkout/checkout.component';
import { ShippingComponent } from './../components/pages/checkout/shipping/shipping.component';

const checkoutRoutes: Routes = [
	{
		path: 'checkout',
		children: [
			{ path: '', component: CheckoutComponent, data: { state: 'checkout' } },
			{ path: 'shipping', component: ShippingComponent, data: { state: 'shipping' }},
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