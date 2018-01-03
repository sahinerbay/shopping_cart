import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { CheckoutComponent } from './components/pages/checkout/checkout.component'
import { HomeComponent } from './components/pages/home/home.component';

const appRoutes: Routes = [
	{
		path: 'checkout', loadChildren: './_routes/checkout-routing.module#CheckoutRoutingModule',
		data: { preload: true }
	},
	{ path: '', component: HomeComponent, data: { state: 'home' } },
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
