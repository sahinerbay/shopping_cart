import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { CheckoutComponent } from './components/checkout/checkout.component'
import { ProductsListComponent } from '@app/components/products-list/products-list.component';


const appRoutes: Routes = [
	{
		path: 'checkout', loadChildren: './components/checkout/checkout-routing.module#CheckoutRoutingModule',
		data: { preload: true }
	},
	{ path: '', component: ProductsListComponent},
	//{ path: '**', component: NotFound }
];

@NgModule({
	imports: [
		RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules })
	],
	exports: [
		RouterModule
	]
})

export class AppRoutingModule { }
